'use client';

import styles from './SpecialOffers.module.scss';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useRef, useState } from 'react';

const offers = [
  {
    id: 1,
    title: 'Подарочный сертификат',
    image: '/images/SpecialOffers/cert.webp',
    description:
      'Вы можете подарить заботу и комфорт близкому человеку с помощью сертификата на любые процедуры.',
  },
  {
    id: 2,
    title: 'Абонементы',
    image: '/images/SpecialOffers/abonement.webp',
    description:
      'Приобретайте абонементы на курс процедур и экономьте до 30% от полной стоимости.',
  },
  {
    id: 3,
    title: 'Скидки',
    image: '/images/SpecialOffers/discount.webp',
    description:
      'Специальные сезонные акции и скидки на самые популярные услуги.',
  },
  {
    id: 4,
    title: 'Подготовка к процедуре',
    image: '/images/SpecialOffers/Individual.webp',
    description:
      'Узнайте, как правильно подготовиться к процедуре для максимального результата.',
  },
  {
    id: 5,
    title: 'Подарочный сертификат',
    image: '/images/SpecialOffers/cert.webp',
    description:
      'Вы можете подарить заботу и комфорт близкому человеку с помощью сертификата на любые процедуры.',
  },
  {
    id: 6,
    title: 'Абонементы',
    image: '/images/SpecialOffers/abonement.webp',
    description:
      'Приобретайте абонементы на курс процедур и экономьте до 30% от полной стоимости.',
  },
  {
    id: 7,
    title: 'Скидки',
    image: '/images/SpecialOffers/discount.webp',
    description:
      'Специальные сезонные акции и скидки на самые популярные услуги.',
  },
  {
    id: 8,
    title: 'Подготовка к процедуре',
    image: '/images/SpecialOffers/Individual.webp',
    description:
      'Узнайте, как правильно подготовиться к процедуре для максимального результата.',
  },
];

export default function SpecialOffers() {
  const [selected, setSelected] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <section className={styles.offers}>
      <div className='container'>
        <h2 className={styles.title}>Специальные предложения</h2>

        <div className={styles.sliderWrapper}>
          <button
            className={`${styles.navButton} ${styles.prev}`}
            id='prev-offer'
          >
            <Image
              src='/icons/SpecialOffers/arrow-left.svg'
              alt='Назад'
              width={30}
              height={30}
            />
          </button>

          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            navigation={{
              prevEl: '#prev-offer',
              nextEl: '#next-offer',
            }}
            spaceBetween={-20}
            slidesPerView={3}
            centeredSlides
            loop
            speed={600}
            grabCursor
            className={styles.swiper}
          >
            {offers.map((offer) => (
              <SwiperSlide key={offer.id} className={styles.card}>
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className={styles.bg}
                />
                <div className={styles.overlay} />
                <div className={styles.content}>
                  <h3>{offer.title}</h3>
                  <button
                    className={styles.button}
                    onClick={() => setSelected(offer)}
                  >
                    Подробнее
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className={`${styles.navButton} ${styles.next}`}
            id='next-offer'
          >
            <Image
              src='/icons/SpecialOffers/arrow-right.svg'
              alt='Вперёд'
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className={styles.modalBackdrop} onClick={() => setSelected(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.close} onClick={() => setSelected(null)}>
              ×
            </button>
            <Image
              src={selected.image}
              alt={selected.title}
              width={500}
              height={300}
              className={styles.modalImage}
            />
            <h3>{selected.title}</h3>
            <p>{selected.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}
