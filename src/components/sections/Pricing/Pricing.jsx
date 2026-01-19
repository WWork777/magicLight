'use client';

import { useState, useEffect } from 'react';
import { servicesData } from '@/data/services';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './Pricing.module.scss';

export default function Pricing({ showDiscount = false }) {
  const [serviceType, setServiceType] = useState('laser'); // laser | lpg
  const [gender, setGender] = useState('female'); // female | male (только для laser)
  const [category, setCategory] = useState('Комплексы');
  const [lgpCategory, setLgpCategory] = useState('Разовые посещения');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize(); // инициализация
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Получаем список категорий
  const categories =
    serviceType === 'laser'
      ? Object.keys(servicesData.laser[gender] || {})
      : Object.keys(servicesData.lgp || {});

  // Получаем список услуг
  const services =
    serviceType === 'laser'
      ? servicesData.laser[gender]?.[category] || []
      : servicesData.lgp[lgpCategory] || [];

  return (
    <section id='pricing' className={styles.pricing}>
      <div className='container'>
        <h2 className={styles.title}>Услуги и цены</h2>

        {/* Переключатель типа услуги */}
        <div className={styles.tabs}>
          <button
            className={serviceType === 'laser' ? styles.active : ''}
            onClick={() => {
              setServiceType('laser');
              setCategory(Object.keys(servicesData.laser.female)[0]);
            }}
          >
            Эпиляция
          </button>
          <button
            className={serviceType === 'lgp' ? styles.active : ''}
            onClick={() => {
              setServiceType('lgp');
              setLgpCategory(Object.keys(servicesData.lgp)[0]);
            }}
          >
            LGP массаж
          </button>
        </div>

        {/* Пол только для laser */}
        {serviceType === 'laser' && (
          <div className={styles.genderTabs}>
            <button
              className={gender === 'female' ? styles.active : ''}
              onClick={() => {
                setGender('female');
                setCategory(Object.keys(servicesData.laser.female)[0]);
              }}
            >
              Женская
            </button>
            <button
              className={gender === 'male' ? styles.active : ''}
              onClick={() => {
                setGender('male');
                setCategory(Object.keys(servicesData.laser.male)[0]);
              }}
            >
              Мужская
            </button>
          </div>
        )}

        {/* Категории для laser и lgp */}
        {(serviceType === 'laser' || serviceType === 'lgp') && (
          <div className={styles.categories}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={
                  serviceType === 'laser'
                    ? category === cat
                      ? styles.active
                      : ''
                    : lgpCategory === cat
                    ? styles.active
                    : ''
                }
                onClick={() => {
                  if (serviceType === 'laser') {
                    setCategory(cat);
                  } else {
                    setLgpCategory(cat);
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Сами карточки */}

        <Swiper
          spaceBetween={25}
          breakpoints={{
            400: { slidesPerView: 1.5 },
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 3.1 },
          }}
          className={styles.swiper}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className={styles.card}>
                {/* Фотка */}
                {service.image && (
                  <div className={styles.imgWrapper}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className={styles.img}
                    />
                  </div>
                )}
                <h3>{service.title}</h3>
                <p className={styles.price}>
                  {showDiscount ? (
                    <>
                      <span className={styles.oldPrice}>{service.price}₽</span>
                      <span className={styles.newPrice}>
                        {Math.round(service.price * 0.75)}
                        <span className={styles.ruble}>₽</span>
                      </span>
                    </>
                  ) : (
                    <span className={styles.regularPrice}>
                      {service.price}
                      <span className={styles.ruble}>₽</span>
                    </span>
                  )}
                </p>
                <div className={styles.actions}>
                  <a
                    href='https://max.ru/u/f9LHodD0cOLklVlmDG32_Tjj3hv6qCHhN-bIwpO72_v_tv80tIHKTLgb6y0'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.btn}
                  >
                    Записаться
                  </a>
                  <a
                    href='https://max.ru/u/f9LHodD0cOLklVlmDG32_Tjj3hv6qCHhN-bIwpO72_v_tv80tIHKTLgb6y0'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.whatsapp}
                  >
                    <Image
                      src='/icons/Pricing/max.svg'
                      alt='max'
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
