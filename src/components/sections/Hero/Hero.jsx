'use client';

import styles from './Hero.module.scss';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id='hero' className={styles.hero}>
      <div className={styles.videoBackground}>
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          preload='auto'
        >
          <source src='/videos/hero-bg.MOV' type='video/mp4' />
          Ваш браузер не поддерживает видео.
        </video>
        <div className={styles.overlay}></div>
      </div>

      <div className='container'>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Услуги лазерной эпиляции по доступной цене в Кемерово
          </h1>
          <p className={styles.subtitle}>
            система скидок по карте каждому клиенту — <br /> 1, 4, 7, 10
            посещения — <span className={styles.percent}>25%</span>
          </p>

          <a
            href='https://wa.me/79039166251'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.mainButton}
          >
            ЗАПИСЬ НА УСЛУГИ
          </a>

          <div className={styles.contacts}>
            <div className={styles.contactItem}>
              <a href='tel:+79039166251' className={styles.circleButton}>
                <Image
                  src='/icons/Header/phone.svg'
                  alt='Позвонить'
                  width={28}
                  height={28}
                />
              </a>
              <span>Позвонить</span>
            </div>

            <div className={styles.contactItem}>
              <a
                href='https://wa.me/79039166251'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.circleButton}
              >
                <Image
                  src='/icons/Contacts/whatsapp.svg'
                  alt='WhatsApp'
                  width={28}
                  height={28}
                />
              </a>
              <span>WhatsApp</span>
            </div>
          </div>

          <p className={styles.privacyText}>
            Нажимая кнопку, вы даёте согласие на{' '}
            <a
              href='/personal-data'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.linkBtn}
            >
              обработку персональных данных
            </a>{' '}
            и соглашаетесь с{' '}
            <a
              href='/privacy'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.linkBtn}
            >
              политикой конфиденциальности
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
