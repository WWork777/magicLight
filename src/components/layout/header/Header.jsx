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
              src='/icons/Header/logo1.webp'
              alt='Логотип'
              width={80}
              height={70}
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
        {/* Контакты */}
        <div className={styles.right}>
          <a href='tel:+79039166251' className={styles.desktop_phone}>
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
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuHeader}>
            <div className={styles.mobileLeft}>
              <Image
                src='/icons/Header/logo1.webp'
                alt='Логотип'
                width={80}
                height={70}
                priority
              />
            </div>
          </div>

          {/* Навигационные ссылки */}
          <ul className={styles.mobileNav}>
            <li>
              <a href='#benefits' onClick={closeMenu}>
                О нас
              </a>
            </li>
            <li>
              <a href='#pricing' onClick={closeMenu}>
                Услуги
              </a>
            </li>
            <li>
              <a href='#offers' onClick={closeMenu}>
                Акции
              </a>
            </li>
            <li>
              <a href='#contacts' onClick={closeMenu}>
                Контакты
              </a>
            </li>
          </ul>

          {/* Номер телефона под ссылками */}
          <div className={styles.mobilePhone}>
            <a href='tel:+79039166251' onClick={closeMenu}>
              +7 (903) 916-62-51
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
