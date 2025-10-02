import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
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
              <a href='#about'>О нас</a>
            </li>
            <li>
              <a href='#services'>Услуги</a>
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
          <a href='tel:+79039166251' className={styles.phone}>
            +7 (903) 916-62-51
          </a>
          <div className={styles.icons}>
            <a href='#'>
              <Image
                src='/icons/Header/telegram.svg'
                alt='Telegram'
                width={25}
                height={25}
              />
            </a>
            <a href='#'>
              <Image
                src='/icons/Header/whatsapp.svg'
                alt='WhatsApp'
                width={25}
                height={25}
              />
            </a>
            <a href='#'>
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
    </header>
  );
}
