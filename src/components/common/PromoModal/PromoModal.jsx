'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './PromoModal.module.scss';

const DELAY_MS = 8000;
const SCROLL_THRESHOLD_RATIO = 0.5; // половина Hero (Hero = 100vh)

export default function PromoModal() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setMounted(true);
    if (typeof window === 'undefined') return;

    let timeoutId = null;

    const show = () => {
      setVisible(true);
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener('scroll', onScroll, { passive: true });
    };

    const onScroll = () => {
      const threshold = window.innerHeight * SCROLL_THRESHOLD_RATIO;
      if (window.scrollY >= threshold) show();
    };

    timeoutId = setTimeout(show, DELAY_MS);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener('scroll', onScroll, { passive: true });
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const form = e.target;
    const name = form.name?.value?.trim();
    const phone = form.phone?.value?.trim();
    if (!name || !phone) {
      setError('Заполните имя и телефон');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          tag: 'discount-50-spring',
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Ошибка отправки');
        return;
      }
      setSubmitted(true);
      setTimeout(handleClose, 2000);
    } catch {
      setError('Ошибка отправки. Попробуйте позже.');
    } finally {
      setLoading(false);
    }
  };

  if (!mounted || !visible) return null;

  return (
    <div className={styles.backdrop} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.close}
          onClick={handleClose}
          aria-label="Закрыть"
        >
          ×
        </button>
        <div className={styles.bgWrap}>
          <Image
            src="/images/Action/action_back.jpg"
            alt=""
            fill
            className={styles.bgImage}
            sizes="100vw"
          />
          <div className={styles.bgOverlay} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Скидка 50% для новых клиентов</h2>
          <p className={styles.promocode}>
            Промокод: <strong>Весна</strong>
          </p>
          {submitted ? (
            <p className={styles.success}>Заявка отправлена! Мы свяжемся с вами.</p>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                required
                className={styles.input}
                disabled={loading}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                required
                className={styles.input}
                disabled={loading}
              />
              {error && <p className={styles.error}>{error}</p>}
              <button type="submit" className={styles.submit} disabled={loading}>
                {loading ? 'Отправка…' : 'Получить скидку'}
              </button>
            </form>
          )}
          <p className={styles.privacy}>
            Нажимая кнопку, вы даёте согласие на{' '}
            <a href="/personal-data" target="_blank" rel="noopener noreferrer">
              обработку персональных данных
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
