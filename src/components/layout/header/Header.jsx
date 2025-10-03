'use client';

import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Лого */}
        <div className={styles.left}>
          <Link href='/'>
            <Image
              src='/icons/Header/logo.svg'
              alt='Логотип'
              width={60}
              height={60}
              priority
            />
          </Link>
        </div>

        {/* Навигация */}
        <nav className={styles.center}>
          <ul>
            <li>
              <a href='#benefits'>О нас</a>
            </li>
            <li>
              <a href='#pricing'>Услуги</a>
            </li>
            <li>
              <a href='#offers'>Акции</a>
            </li>
            <li>
              <a href='#contacts'>Контакты</a>
            </li>
          </ul>
        </nav>

        <div className={styles.burgerWrapper}>
          <div
            className={`${styles.burger} ${isMenuOpen ? styles.open : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Контакты */}
        <div className={styles.right}>
          <a href='tel:+79039166251' className={styles.phone}>
            +7 (903) 916-62-51
          </a>
          <div className={styles.icons}>
            <a href='https://t.me/VSVET25'>
              <Image
                src='/icons/Header/telegram.svg'
                alt='Telegram'
                width={25}
                height={25}
              />
            </a>
            <a href='https://wa.me/79039166251'>
              <Image
                src='/icons/Header/whatsapp.svg'
                alt='WhatsApp'
                width={25}
                height={25}
              />
            </a>
            <a href='https://vk.com/laser_vs42_kem'>
              <Image
                src='/icons/Header/vk.svg'
                alt='VK'
                width={25}
                height={25}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuHeader}>
            <div className={styles.logo}>
              <Image
                src='/icons/Header/logo.svg'
                alt='Логотип'
                width={60}
                height={60}
                priority
              />
            </div>
          </div>

          <ul>
            <li>
              <a href='#benefits' onClick={toggleMenu}>
                О нас
              </a>
            </li>
            <li>
              <a href='#pricing' onClick={toggleMenu}>
                Услуги
              </a>
            </li>
            <li>
              <a href='#offers' onClick={toggleMenu}>
                Акции
              </a>
            </li>
            <li>
              <a href='#contacts' onClick={toggleMenu}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
