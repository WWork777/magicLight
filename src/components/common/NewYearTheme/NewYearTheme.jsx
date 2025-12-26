'use client';

import { useEffect, useState } from 'react';
import styles from './NewYearTheme.module.scss';

export default function NewYearTheme() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Проверяем, новогодний ли период (декабрь-январь)
    const now = new Date();
    const month = now.getMonth(); // 0-11 (0 = январь, 11 = декабрь)
    const day = now.getDate();
    
    // Декабрь или Январь, или можно расширить до конца января
    const isNewYearPeriod = month === 11 || (month === 0 && day <= 15);

    setIsActive(isNewYearPeriod);
    
    // Добавляем класс к body для новогодней темы
    if (isNewYearPeriod) {
      document.body.classList.add('new-year-active');
    } else {
      document.body.classList.remove('new-year-active');
    }
    
    return () => {
      document.body.classList.remove('new-year-active');
    };
  }, []);

  if (!isActive) return null;

  // Генерируем снежинки
  const snowflakes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    size: 5 + Math.random() * 10,
  }));

  return (
    <div className={styles.newYearTheme}>
      {/* Снегопад */}
      <div className={styles.snowContainer}>
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className={styles.snowflake}
            style={{
              left: `${flake.left}%`,
              animationDelay: `${flake.delay}s`,
              animationDuration: `${flake.duration}s`,
              width: `${flake.size}px`,
              height: `${flake.size}px`,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      {/* Блестящие частицы - только по краям и в пустых областях */}
      <div className={styles.sparkles}>
        {Array.from({ length: 20 }, (_, i) => {
          // Размещаем sparkles только по краям: левый край, правый край, верх, низ
          const zone = Math.floor(Math.random() * 4); // 0-3: лево, право, верх, низ
          let left, top;
          
          if (zone === 0) {
            // Левый край (0-10% от ширины)
            left = Math.random() * 10;
            top = Math.random() * 100;
          } else if (zone === 1) {
            // Правый край (90-100% от ширины)
            left = 90 + Math.random() * 10;
            top = Math.random() * 100;
          } else if (zone === 2) {
            // Верхняя часть (0-15% от высоты)
            left = Math.random() * 100;
            top = Math.random() * 15;
          } else {
            // Нижняя часть (85-100% от высоты)
            left = Math.random() * 100;
            top = 85 + Math.random() * 15;
          }
          
          return (
            <div
              key={i}
              className={styles.sparkle}
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              ✨
            </div>
          );
        })}
      </div>
    </div>
  );
}

