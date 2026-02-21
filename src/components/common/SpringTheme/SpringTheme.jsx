'use client';

import { useEffect, useState } from 'react';
import styles from './SpringTheme.module.scss';

export default function SpringTheme() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Проверяем настройку в localStorage
    // Если ключа нет - по умолчанию включено (true)
    // Можно управлять вручную через localStorage.setItem('springThemeEnabled', 'true'/'false')
    const springThemeEnabled = localStorage.getItem('springThemeEnabled');
    const shouldShow = springThemeEnabled === null ? true : springThemeEnabled === 'true';

    setIsActive(shouldShow);
    
    // Добавляем класс к body для весенней темы
    if (shouldShow) {
      document.body.classList.add('spring-active');
    } else {
      document.body.classList.remove('spring-active');
    }
    
    // Слушаем изменения в localStorage для ручного управления
    const handleStorageChange = (e) => {
      if (e.key === 'springThemeEnabled') {
        const newValue = e.newValue === 'true';
        setIsActive(newValue);
        if (newValue) {
          document.body.classList.add('spring-active');
        } else {
          document.body.classList.remove('spring-active');
        }
      }
    };

    // Добавляем функцию для удобного управления через консоль
    // Можно использовать: window.toggleSpringTheme() или window.setSpringTheme(true/false)
    if (typeof window !== 'undefined') {
      window.toggleSpringTheme = () => {
        const current = localStorage.getItem('springThemeEnabled');
        const newValue = current === 'true' ? 'false' : 'true';
        localStorage.setItem('springThemeEnabled', newValue);
        setIsActive(newValue === 'true');
        if (newValue === 'true') {
          document.body.classList.add('spring-active');
        } else {
          document.body.classList.remove('spring-active');
        }
      };

      window.setSpringTheme = (enabled) => {
        localStorage.setItem('springThemeEnabled', enabled ? 'true' : 'false');
        setIsActive(enabled);
        if (enabled) {
          document.body.classList.add('spring-active');
        } else {
          document.body.classList.remove('spring-active');
        }
      };

    }

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      document.body.classList.remove('spring-active');
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  if (!isActive) return null;

  // ===== НАСТРОЙКИ =====
  // Меняйте эти значения для изменения частоты и скорости
  const PETALS_COUNT = 30;        // Количество лепестков (больше = чаще появление)
  const MIN_DURATION = 10;         // Минимальная скорость падения в секундах (меньше = быстрее)
  const MAX_DURATION = 15;         // Максимальная скорость падения в секундах
  const MAX_DELAY = 3;            // Максимальная задержка между появлениями в секундах (меньше = чаще)
  // =====================

  // Генерируем лепестки цветов
  const petals = Array.from({ length: PETALS_COUNT }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * MAX_DELAY,
    duration: MIN_DURATION + Math.random() * (MAX_DURATION - MIN_DURATION),
    size: 8 + Math.random() * 12,
    rotation: Math.random() * 360,
  }));

  // Весенние цвета для лепестков
  const springColors = ['🌸', '🌺', '💮'];

  return (
    <div className={styles.springTheme}>
      {/* Падающие лепестки */}
      <div className={styles.petalsContainer}>
        {petals.map((petal) => (
          <div
            key={petal.id}
            className={styles.petal}
            style={{
              left: `${petal.left}%`,
              animationDelay: `${petal.delay}s`,
              animationDuration: `${petal.duration}s`,
              fontSize: `${petal.size}px`,
              transform: `rotate(${petal.rotation}deg)`,
            }}
          >
            {springColors[Math.floor(Math.random() * springColors.length)]}
          </div>
        ))}
      </div>

    </div>
  );
}

