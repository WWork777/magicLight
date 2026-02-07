'use client';

import { useState, useEffect } from 'react';
import { structuredServices } from '@/data/services';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './Pricing.module.scss';
import Link from 'next/link';

export default function Pricing({ showDiscount = false }) {
  const [serviceType, setServiceType] = useState('laser'); // laser | lgp
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

  // Получаем список категорий для текущего типа услуги и пола
  const getCategories = () => {
    if (serviceType === 'laser') {
      return Object.keys(structuredServices.laser[gender] || {});
    } else {
      return Object.keys(structuredServices.lgp || {});
    }
  };

  // Получаем список услуг для текущей категории
  const getServices = () => {
    if (serviceType === 'laser') {
      return structuredServices.laser[gender]?.[category] || [];
    } else {
      return structuredServices.lgp[lgpCategory] || [];
    }
  };

  const categories = getCategories();
  const services = getServices();

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
              setGender('female');
              setCategory('Комплексы');
            }}
          >
            Эпиляция
          </button>
          <button
            className={serviceType === 'lgp' ? styles.active : ''}
            onClick={() => {
              setServiceType('lgp');
              setLgpCategory('Разовые посещения');
            }}
          >
            LPG массаж
          </button>
        </div>

        {/* Пол только для laser */}
        {serviceType === 'laser' && (
          <div className={styles.genderTabs}>
            <button
              className={gender === 'female' ? styles.active : ''}
              onClick={() => {
                setGender('female');
                setCategory('Комплексы');
              }}
            >
              Женская
            </button>
            <button
              className={gender === 'male' ? styles.active : ''}
              onClick={() => {
                setGender('male');
                setCategory('Комплексы');
              }}
            >
              Мужская
            </button>
          </div>
        )}

        {/* Категории для laser и lgp */}
        {categories.length > 0 && (
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
                    {/* Ссылка на услугу - теперь по корневому пути */}
                    <Link href={`/${service.slug}`} className={styles.imageLink}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className={styles.img}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </Link>
                  </div>
                )}
                
                {/* Заголовок как ссылка */}
                <h3>
                  <Link href={`/${service.slug}`} className={styles.titleLink}>
                    {service.title}
                  </Link>
                </h3>
                {/* Кнопка "Подробнее" */}
                  <Link 
                    href={`/${service.slug}`}
                    className={styles.detailsBtn}
                  >
                    Подробнее →
                  </Link>
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
        
        {/* Если нет услуг в выбранной категории */}
        {services.length === 0 && (
          <div className={styles.noServices}>
            <p>В этой категории пока нет услуг</p>
          </div>
        )}
      </div>
    </section>
  );
}