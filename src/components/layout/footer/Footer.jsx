"use client";
import styles from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          {/* Левый блок - навигация */}
          <div className={styles.nav}>
            <ul>
              <li>
                {pathname === "/" ? (
                  <a href="#benefits">О нас</a>
                ) : (
                  <Link href="/#benefits">О нас</Link>
                )}
              </li>
              <li>
                {pathname === "/" ? (
                  <a href="#pricing">Услуги</a>
                ) : (
                  <Link href="/#pricing">Услуги</Link>
                )}
              </li>
              <li>
                {pathname === "/" ? (
                  <a href="#offers">Акции</a>
                ) : (
                  <Link href="/#offers">Акции</Link>
                )}
              </li>
              <li>
                {pathname === "/" ? (
                  <a href="#contacts">Контакты</a>
                ) : (
                  <Link href="/#contacts">Контакты</Link>
                )}
              </li>
              <li>
                <Link href="/blog">Блог</Link>
              </li>
              <li>
                <a href="/privacy">Политика конфиденциальности</a>
              </li>
              <li>
                <a href="/personal-data">
                  Политика обработки <br></br>персональных данных
                </a>
              </li>
            </ul>
          </div>

          {/* Центр - логотип и описание */}
          <div className={styles.center}>
            <Link href="/">
              <Image
                src="/icons/Footer/logo.svg"
                alt="Логотип"
                width={300}
                height={200}
              />
            </Link>
          </div>

          {/* Правый блок - контакты и соцсети */}
          <div className={styles.contacts}>
            <div className={styles.contactInfo}>
              <a href="tel:+79039166251">+7 (903) 916-62-51</a>
              <a href="mailto:email@mail.ru">t-kiva@yandex.ru</a>
            </div>

            <div className={styles.socials}>
              <a href="https://t.me/Magic_Light_Laser" target="_blank">
                <img src="/icons/Footer/telegram.svg" alt="Telegram" />
              </a>
              <a href="https://wa.me/79039166251" target="_blank">
                <img src="/icons/Footer/whatsapp.svg" alt="WhatsApp" />
              </a>
              <a href="https://vk.com/laser_vs42_kem" target="_blank">
                <img src="/icons/Footer/vk.svg" alt="VK" />
              </a>
            </div>

            <a
              href="https://wa.me/79039166251"
              target="_blank"
              rel="noopener noreferrer"
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
