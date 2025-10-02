'use client';

import { useState } from 'react';
import { servicesData } from '@/data/services';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './Pricing.module.scss';

export default function Pricing() {
  const [serviceType, setServiceType] = useState('laser'); // laser | lpg
  const [gender, setGender] = useState('female'); // female | male (только для laser)
  const [category, setCategory] = useState('Комплексы');

  // Получаем список категорий
  const categories =
    serviceType === 'laser'
      ? Object.keys(servicesData.laser[gender] || {})
      : [];

  // Получаем список услуг
  const services =
    serviceType === 'laser'
      ? servicesData.laser[gender]?.[category] || []
      : servicesData.lgp.services;

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
            Лазерная эпиляция
          </button>
          <button
            className={serviceType === 'lgp' ? styles.active : ''}
            onClick={() => setServiceType('lgp')}
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

        {/* Категории только для laser */}
        {serviceType === 'laser' && (
          <div className={styles.categories}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={category === cat ? styles.active : ''}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Сами карточки */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
          }}
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
                  {service.price}
                  <span className={styles.ruble}>₽</span>
                </p>
                <div className={styles.actions}>
                  <button className={styles.btn}>Записаться</button>
                  <a
                    href='https://wa.me/79000000000'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.whatsapp}
                  >
                    <Image
                      src='/icons/Pricing/whatsapp.svg'
                      alt='WhatsApp'
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
