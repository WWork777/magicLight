'use client';
import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.wrapper}>
          {/* Левый блок - навигация */}
          <div className={styles.nav}>
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
          </div>

          {/* Центр - логотип и описание */}
          <div className={styles.center}>
            <Link href='/'>
              <Image
                src='icons/Footer/logo.svg'
                alt='Логотип'
                width={400}
                height={300}
              />
            </Link>
          </div>

          {/* Правый блок - контакты и соцсети */}
          <div className={styles.contacts}>
            <div className={styles.contactInfo}>
              <a href='tel:+79039166251'>+7 (903) 916-62-51</a>
              <a href='mailto:email@mail.ru'>t-kiva@yandex.ru</a>
            </div>

            <div className={styles.socials}>
              <a href='https://t.me/VSVET25' target='_blank'>
                <img src='/icons/Footer/telegram.svg' alt='Telegram' />
              </a>
              <a href='https://wa.me/79039166251' target='_blank'>
                <img src='/icons/Footer/whatsapp.svg' alt='WhatsApp' />
              </a>
              <a href='https://vk.com/laser_vs42_kem' target='_blank'>
                <img src='/icons/Footer/vk.svg' alt='VK' />
              </a>
            </div>

            <a
              href='https://wa.me/79039166251'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.button}
            >
              Записаться онлайн
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
