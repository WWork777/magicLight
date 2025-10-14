'use client';

import { useEffect, useState } from 'react';
import styles from './CookieBanner.module.scss';

export default function CookieBanner({ onConsentGiven }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setVisible(true);
    } else if (consent === 'accepted' && typeof onConsentGiven === 'function') {
      onConsentGiven(); // запуск метрики, если ранее принято
    }
  }, [onConsentGiven]);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
    if (typeof onConsentGiven === 'function') {
      onConsentGiven(); // запуск метрики
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner}>
      <p>
        Мы используем cookie-файлы для улучшения работы сайта. Продолжая
        использовать сайт, вы соглашаетесь с их использованием.{' '}
        <a href='/docs/privacy.txt' target='_blank' rel='noopener noreferrer'>
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
