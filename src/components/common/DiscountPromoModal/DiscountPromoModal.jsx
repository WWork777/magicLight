'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './DiscountPromoModal.module.scss';

export default function DiscountPromoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', phone: '' });
  const [toastVisible, setToastVisible] = useState(false);
  const focusTrapRef = useRef(null);
  const toastTimerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    const firstFocusable = focusTrapRef.current?.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    firstFocusable?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (error) setError('');
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmedName = form.name.trim();
    const trimmedPhone = form.phone.trim();
    if (!trimmedName || !trimmedPhone) {
      setError('Заполните имя и телефон, пожалуйста.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: trimmedName,
          phone: trimmedPhone,
          tag: 'discount-50-november',
        }),
      });

      if (!response.ok) {
        throw new Error('Не получилось отправить заявку');
      }

      setForm({ name: '', phone: '' });
      handleClose();
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
      setToastVisible(true);
      toastTimerRef.current = setTimeout(() => setToastVisible(false), 3500);
    } catch (submitError) {
      console.error(submitError);
      setError('Не удалось отправить данные. Попробуйте ещё раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  if (!isOpen && !toastVisible) {
    return null;
  }

  return (
    <>
      {isOpen && (
        <div
          className={styles.backdrop}
          role='presentation'
          onClick={handleOverlayClick}
        >
          <div
            className={styles.modal}
            role='dialog'
            aria-modal='true'
            aria-labelledby='discount-modal-title'
            aria-describedby='discount-modal-description'
            ref={focusTrapRef}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type='button'
              className={styles.close}
              onClick={handleClose}
              aria-label='Закрыть окно'
            >
              ✕
            </button>

            <h3
              id='discount-modal-title'
              className={`${styles.heading} ${styles.headingAccent}`}
            >
              50% скидка новым клиентам&nbsp;&mdash; до конца ноября
            </h3>

            <p id='discount-modal-description' className={styles.description}>
              Оставьте свой контактный номер, и мы вам перезвоним в течение 5
              минут.
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
              <label className={styles.label}>
                <input
                  name='name'
                  type='text'
                  placeholder='Ваше имя'
                  value={form.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  autoComplete='name'
                  aria-label='Ваше имя'
                  required
                />
              </label>

              <label className={styles.label}>
                <input
                  name='phone'
                  type='tel'
                  placeholder='Ваш телефон'
                  value={form.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  autoComplete='tel'
                  aria-label='Ваш телефон'
                  required
                />
              </label>

              {error && <p className={styles.error}>{error}</p>}

              <button
                type='submit'
                className={styles.submit}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Отправляем…' : 'Отправить'}
              </button>

              <p className={styles.privacy}>
                Нажимая на кнопку, вы даете согласие на{' '}
                <a
                  href='/personal-data'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  обработку персональных данных
                </a>{' '}
                и соглашаетесь с{' '}
                <a href='/privacy' target='_blank' rel='noopener noreferrer'>
                  политикой конфиденциальности
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      )}

      {toastVisible && (
        <div className={styles.toast} role='status' aria-live='polite'>
          Спасибо! Мы скоро свяжемся с вами.
        </div>
      )}
    </>
  );
}
