'use client';

import { useState } from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const offers = [
  {
    id: 1,
    title: 'Скидка 25%',
    image: '/images/SpecialOffers/sales.webp',
    description: 'Скидка 25% на 1, 4, 7, 10 посещение по карте клиента.',
  },
  {
    id: 2,
    title: 'Приведи подругу',
    image: '/images/SpecialOffers/studio1.webp',
    description: 'Приведи подругу и получи бонус 500 рублей на свой счёт.',
  },
  {
    id: 3,
    title: 'Подарочный сертификат',
    image: '/images/SpecialOffers/cert3.webp',
    description:
      'Вы можете подарить заботу и комфорт близкому человеку с помощью сертификата на любые процедуры.',
  },
  {
    id: 4,
    title: 'Абонементы',
    image: '/images/SpecialOffers/abonement2.webp',
    description:
      'Приобретайте абонементы на курс процедур и экономьте до 30% от полной стоимости.',
  },
  {
    id: 5,
    title: 'Скидки',
    image: '/images/SpecialOffers/sales.webp',
    description:
      'Специальные сезонные акции и скидки на самые популярные услуги.',
  },
  {
    id: 6,
    title: 'Заходи на канал',
    image: '/images/SpecialOffers/studio1.webp',
    description: 'И будь в курсе выгодных акций и предложений.',
  },
];

export default function Hero() {
  const [selectedOffer, setSelectedOffer] = useState(null);

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
          {/* <p className={styles.subtitle}>
            система скидок по карте каждому клиенту — <br /> 1, 4, 7, 10
            посещения — <span className={styles.percent}>25%</span>
          </p> */}

          <a
            href='https://max.ru/u/f9LHodD0cOLklVlmDG32_Tjj3hv6qCHhN-bIwpO72_v_tv80tIHKTLgb6y0'
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
                href='https://max.ru/u/f9LHodD0cOLklVlmDG32_Tjj3hv6qCHhN-bIwpO72_v_tv80tIHKTLgb6y0'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.circleButton}
              >
                <Image
                  src='/icons/Contacts/max.svg'
                  alt='max'
                  width={28}
                  height={28}
                />
              </a>
              <span>Max</span>
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

        {/* Свайпер с акциями в нижней правой части */}
        <div className={styles.offersSwiper}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop
            speed={600}
            grabCursor
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: styles.paginationBullet,
              bulletActiveClass: styles.paginationBulletActive,
            }}
            className={styles.swiper}
          >
            {offers.map((offer) => (
              <SwiperSlide key={offer.id} className={styles.offerSlide}>
                <div className={styles.offerCard}>
                  <div className={styles.offerContent}>
                    <h3 className={styles.offerTitle}>{offer.title}</h3>
                    <p className={styles.offerDescription}>
                      {offer.description}
                    </p>
                    <div className={styles.offerButtons}>
                      <button
                        className={styles.detailsButton}
                        onClick={() => setSelectedOffer(offer)}
                      >
                        Подробнее
                      </button>
                      <a
                        href='https://t.me/Magic_Light_Laser'
                        target='_blank'
                        rel='noopener noreferrer'
                        className={styles.bookButton}
                      >
                        Записаться
                      </a>
                      <a
                        href='https://max.ru/u/f9LHodD0cOLklVlmDG32_Tjj3hv6qCHhN-bIwpO72_v_tv80tIHKTLgb6y0'
                        target='_blank'
                        rel='noopener noreferrer'
                        className={styles.whatsappButton}
                      >
                        <Image
                          src='/icons/Contacts/max.svg'
                          alt='max'
                          width={24}
                          height={24}
                        />
                      </a>
                    </div>
                    {/* Ссылка на прайс */}
                    <a href='/pricing-discount' className={styles.priceLink}>
                      Прайс на 1, 4, 7, 10 посещение
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Модалка акции */}
      {selectedOffer && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setSelectedOffer(null)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={() => setSelectedOffer(null)}
            >
              ×
            </button>
            <Image
              src={selectedOffer.image}
              alt={selectedOffer.title}
              width={500}
              height={300}
              className={styles.modalImage}
            />
            <h3>{selectedOffer.title}</h3>
            <p>{selectedOffer.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}
