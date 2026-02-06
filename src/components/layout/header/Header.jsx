"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
const SERVICE_SLUGS = [
  
  "bikini-lyuboe-podmyshechnye-vpadiny-lazernaya-epilyaciya",
  "podmyshechnye-vpadiny-goleni-lazernaya-epilyaciya",
  "bikini-lyuboe-goleni-lazernaya-epilyaciya",
  "bikini-lyuboe-goleni-podmyshki-lazernaya-epilyaciya",
  "bikini-lyuboe-nogi-celikom-podmyshki-lazernaya-epilyaciya",
  "goleni-palcy-koleni-lazernaya-epilyaciya",
  "nogi-celikom-lazernaya-epilyaciya",
  "yagodicy-lazernaya-epilyaciya",
  "bedra-perednyaya-storona-koleni-lazernaya-epilyaciya",
  "bedra-zadnyaya-storona-koleni-lazernaya-epilyaciya",
  "bedra-polnostyu-koleni-lazernaya-epilyaciya",
  "podmyshechnye-vpadiny-lazernaya-epilyaciya",
  "plechi-lazernaya-epilyaciya",
  "ruki-polnostyu-lazernaya-epilyaciya",
  "ruki-do-loktya-lazernaya-epilyaciya",
  "kisti-palcy-lazernaya-epilyaciya",
  "klassicheskoe-bikini-lazernaya-epilyaciya",
  "glubokoe-bikini-lazernaya-epilyaciya",
  "totalnoe-bikini-mezhyagodichka-lazernaya-epilyaciya",
  "spina-polnostyu-lazernaya-epilyaciya",
  "zhivot-polnostyu-lazernaya-epilyaciya",
  "liniya-zhivota-lazernaya-epilyaciya",
  "zhivot-niz-lazernaya-epilyaciya",
  "areoly-lazernaya-epilyaciya",
  "verhnyaya-guba-lazernaya-epilyaciya",
  "lico-polnostyu-lazernaya-epilyaciya",
  "lob-lazernaya-epilyaciya",
  "mezhbrove-lazernaya-epilyaciya",
  "podborodok-lazernaya-epilyaciya",
  "ushi-lazernaya-epilyaciya",
  "sheki-lazernaya-epilyaciya",
  "skula-lazernaya-epilyaciya",
  "bakenbardy-lazernaya-epilyaciya",
  "podmyshechnye-vpadiny-sheya-perednyaya-zadnyaya-chast-lazernaya-epilyaciya",
  "podmyshechnye-vpadiny-lico-polnostyu-lazernaya-epilyaciya",
  "golen-palcy-koleni-lazernaya-epilyaciya-muzhchiny",
  "nogi-celikom-lazernaya-epilyaciya-muzhchiny",
  "podmyshechnye-vpadiny-lazernaya-epilyaciya-muzhchiny",
  "plechi-lazernaya-epilyaciya-muzhchiny",
  "ruki-polnostyu-lazernaya-epilyaciya-muzhchiny",
  "predpleche-lazernaya-epilyaciya",
  "spina-polnostyu-lazernaya-epilyaciya-muzhchiny",
  "zhivot-polnostyu-lazernaya-epilyaciya-muzhchiny",
  "liniya-zhivota-lazernaya-epilyaciya-muzhchiny",
  "grud-muzhskaya-lazernaya-epilyaciya",
  "sheya-zadnyaya-chast-lazernaya-epilyaciya",
  "sheya-perednyaya-chast-lazernaya-epilyaciya",
  "sheki-lazernaya-epilyaciya-muzhchiny",
  "bakenbardy-lazernaya-epilyaciya-muzhchiny",
  "pervoe-probnoe-poseshchenie-lpg-massazh",
  "razovoe-poseshchenie-25min-lpg-massazh",
  "razovoe-poseshchenie-45min-lpg-massazh",
  "kostyum-lpg-massazh",
  "10-seansov-po-25min-lpg-massazh-abonement",
  "10-seansov-45min-lpg-massazh-abonement",
  "kostyum-lpg-massazh-abonement"
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  useEffect(() => {
  const isBlogPage = pathname?.startsWith("/blog");

  // Извлекаем чистый слаг из URL (например: 'bikini-lyuboe...')
  const currentSlug = pathname?.replace(/^\//, ""); 

  // Проверяем: 
  // 1. Есть ли слаг вообще
  // 2. Нет ли в нем лишних слешей (чтобы не спутать с другими разделами)
  // 3. Содержит ли он характерное окончание "lazernaya-epilyaciya" (с учетом возможных опечаток)
  const isServicePage = 
    currentSlug && 
    !currentSlug.includes('/') && 
    (currentSlug.includes("lazernaya-epilyaciya") || currentSlug.includes("lazernaya-epilyatsiya") || currentSlug.includes("lpg-massazh"));

  if (isBlogPage || isServicePage) {
    setIsScrolledPastHero(true);
    return;
  }

  const handleScroll = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      const scrollPosition = window.scrollY;
      setIsScrolledPastHero(scrollPosition + 150 > heroBottom);
    } else {
      setIsScrolledPastHero(false);
    }
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, [pathname]);

  return (
    <header
      className={`${styles.header} ${
        isScrolledPastHero ? styles.darkened : ""
      }`}
    >
      <div className={styles.inner}>
        {/* Лого */}
        <div className={styles.left}>
          <Link href="/">
            <Image
              src="/icons/Header/logo1.webp"
              alt="Логотип"
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
          </ul>
        </nav>
        {/* Контакты */}
        <div className={styles.right}>
          <a href="tel:+79039166251" className={styles.desktop_phone}>
            +7 (903) 916-62-51
          </a>
          <div className={styles.icons}>
            <a href="https://t.me/Magic_Light_Laser">
              <Image
                src="/icons/Header/telegram.svg"
                alt="Telegram"
                width={25}
                height={25}
              />
            </a>
            <a href="https://max.ru/u/f9LHodD0cOLklVlmDG32_Tjj3hv6qCHhN-bIwpO72_v_tv80tIHKTLgb6y0">
              <Image
                src="/icons/Header/max.svg"
                alt="max"
                width={25}
                height={25}
              />
            </a>
            <a href="https://vk.com/laser_vs42_kem">
              <Image
                src="/icons/Header/vk.svg"
                alt="VK"
                width={25}
                height={25}
              />
            </a>
          </div>
        </div>
        <div className={styles.burgerWrapper}>
          <div
            className={`${styles.burger} ${isMenuOpen ? styles.open : ""}`}
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
                src="/icons/Header/logo1.webp"
                alt="Логотип"
                width={80}
                height={70}
                priority
              />
            </div>
          </div>

          {/* Навигационные ссылки */}
          <ul className={styles.mobileNav}>
            <li>
              {pathname === "/" ? (
                <a href="#benefits" onClick={closeMenu}>
                  О нас
                </a>
              ) : (
                <Link href="/#benefits" onClick={closeMenu}>
                  О нас
                </Link>
              )}
            </li>
            <li>
              {pathname === "/" ? (
                <a href="#pricing" onClick={closeMenu}>
                  Услуги
                </a>
              ) : (
                <Link href="/#pricing" onClick={closeMenu}>
                  Услуги
                </Link>
              )}
            </li>
            <li>
              {pathname === "/" ? (
                <a href="#offers" onClick={closeMenu}>
                  Акции
                </a>
              ) : (
                <Link href="/#offers" onClick={closeMenu}>
                  Акции
                </Link>
              )}
            </li>
            <li>
              {pathname === "/" ? (
                <a href="#contacts" onClick={closeMenu}>
                  Контакты
                </a>
              ) : (
                <Link href="/#contacts" onClick={closeMenu}>
                  Контакты
                </Link>
              )}
            </li>
            <li>
              <Link href="/blog" onClick={closeMenu}>
                Блог
              </Link>
            </li>
          </ul>

          {/* Номер телефона под ссылками */}
          <div className={styles.mobilePhone}>
            <a href="tel:+79039166251" onClick={closeMenu}>
              +7 (903) 916-62-51
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
