'use client';

import { useEffect, useState } from 'react';
import styles from './CookieBanner.module.scss';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Устанавливаем mounted только на клиенте
    setMounted(true);

    // Проверяем согласие только на клиенте
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) {
        setVisible(true);
      }
    }
  }, []);

  const handleAccept = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookieConsent', 'accepted');
      setVisible(false);
      // Отправляем кастомное событие для YandexMetrika
      window.dispatchEvent(new Event('cookieConsentAccepted'));
      // Триггерим событие storage для других вкладок
      window.dispatchEvent(new Event('storage'));
    }
  };

  const handleDecline = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookieConsent', 'declined');
      setVisible(false);
    }
  };

  // Не рендерим на сервере или если не видим
  if (!mounted || !visible) return null;

  return (
    <div className={styles.banner}>
      <p>
        Мы используем cookie-файлы для улучшения работы сайта. Продолжая
        использовать сайт, вы соглашаетесь с их использованием.{' '}
        <a href='/privacy' target='_blank' rel='noopener noreferrer'>
          Подробнее
        </a>
      </p>
      <div className={styles.buttons}>
        <button onClick={handleAccept}>Принять</button>
        <button onClick={handleDecline} className={styles.decline}>
          Отклонить
        </button>
      </div>
    </div>
  );
}
