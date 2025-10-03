'use client';

import { useState, useRef, useEffect } from 'react';
import { reviewsData } from '@/data/reviews';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Reviews.module.scss';
import Image from 'next/image';

export default function Reviews() {
  const [source, setSource] = useState('gis2');
  const swiperRef = useRef(null);
  const reviews = reviewsData[source];
  const [selectedReview, setSelectedReview] = useState(null);

  useEffect(() => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  const reviewLinks = {
    gis2: 'https://2gis.ru/kemerovo/firm/70000001039981624/tab/reviews',
    yandex: 'https://yandex.ru/maps/org/volshebny_svet/167080733865/reviews/',
  };

  const icons = {
    gis2: '/icons/Reviews/2gis.svg',
    yandex: '/icons/Reviews/yandex.svg',
  };

  return (
    <section id='reviews' className={styles.reviews}>
      <div className='container'>
        <div className={styles.header}>
          <div className={styles.left}>
            <div className={styles.titleRow}>
              <h2>Нам доверяют</h2>
              <div className={styles.arrows}>
                <button id='prev-review'>
                  <img src='/icons/Reviews/arrow-left.svg' alt='←' />
                </button>
                <button id='next-review'>
                  <img src='/icons/Reviews/arrow-right.svg' alt='→' />
                </button>
              </div>
            </div>

            <div className={styles.tabs}>
              <button
                className={source === 'gis2' ? styles.active : ''}
                onClick={() => setSource('gis2')}
              >
                2GIS
              </button>
              <button
                className={source === 'yandex' ? styles.active : ''}
                onClick={() => setSource('yandex')}
              >
                Яндекс
              </button>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.rating}>
              <span className={styles.score}>5.0</span>
              <div className={styles.stars}>{'★'.repeat(5)}</div>
              <Image
                src={icons[source]}
                alt={source}
                width={18}
                height={18}
                className='style.icon'
              />
            </div>
            <div className={styles.subtext}>68 отзывов • 89 оценок</div>
            <a
              href={reviewLinks[source]}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.leaveReview}
            >
              {source === 'gis2' ? 'Оставить отзыв' : 'Оставить отзыв'}
            </a>
          </div>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          navigation={{
            nextEl: '#next-review',
            prevEl: '#prev-review',
          }}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((rev) => (
            <SwiperSlide key={rev.id}>
              <div className={styles.card}>
                <h4>{rev.name}</h4>
                <div className={styles.date}>{rev.date}</div>

                {/* SVG-звёзды */}
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src={
                        i < rev.rating
                          ? '/icons/Reviews/star-filled.svg'
                          : '/icons/Reviews/star-outline.svg'
                      }
                      alt={i < rev.rating ? '★' : '☆'}
                      width={20}
                      height={20}
                    />
                  ))}
                </div>

                <p className={styles.text}>{rev.text}</p>
                {rev.text.length > 120 && (
                  <button
                    className={styles.readMore}
                    onClick={() => setSelectedReview(rev)}
                  >
                    Читать полностью
                  </button>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* === МОДАЛКА === */}
        {selectedReview && (
          <div
            className={styles.modalBackdrop}
            onClick={() => setSelectedReview(null)}
          >
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <button
                className={styles.close}
                onClick={() => setSelectedReview(null)}
              >
                ×
              </button>
              <h4>{selectedReview.name}</h4>
              <div className={styles.stars}>
                {'★'.repeat(selectedReview.rating)}
                {'☆'.repeat(5 - selectedReview.rating)}
              </div>
              <p>{selectedReview.text}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
