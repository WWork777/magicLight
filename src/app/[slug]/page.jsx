// src/app/[slug]/page.jsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import styles from './page.module.scss'; // Импорт стилей
import Link from 'next/link';

// import BreadCrumbs from '@/components/common/BreadCrumbs/BreadCrumbs';
// import BlogSlider from '@/components/common/BlogSlider/BlogSlider';
// import Contacts from '@/components/common/Contacts/Contacts';

export async function generateStaticParams() {
  const services = getAllServiceSlugs();
  return services;
}

export async function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  
  if (!service) {
    return {
      title: "Услуга не найдена | Лазерная эпиляция",
      description: "Запрашиваемая услуга не найдена",
    };
  }

  return {
    title: service.seoTitle || `${service.title} | Лазерная эпиляция`,
    description: service.seoDescription || service.description,
  };
}

export default function ServicePage({ params }) {
  const service = getServiceBySlug(params.slug);
  
  // Если это не услуга, показываем 404
  if (!service) {
    notFound();
  }

  return (
    <section className={styles.servicePage}>
      <div className="container" style={{
                      
                      backgroundColor: '#fff',
                      padding: '20px 30px',
                      borderRadius: '40px'
                    }}>
        <h1 className={styles.title}>{service.title}</h1>
        
        <div className={styles.contentGrid}>
          <div className={styles.textContent}>
            <div className={styles.priceBlock}>
              <span className={styles.currentPrice}>
                {service.price} <span className={styles.ruble}>₽</span>
              </span>
              {service.duration && (
                <span className={styles.duration}>{service.duration}</span>
              )}
            </div>
            
            <p className={styles.description}>{service.description}</p>
            
            <div className={styles.fullText}>
              <p>{service.fullDescription}</p>
            </div>
            
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

          <div className={styles.imageWrapper}>
            <div className={styles.imgContainer}>
              <img src={service.image} alt={service.title} className={styles.img} />
            </div>
            {/* Декоративный элемент в стиле твоего бренда */}
            <div className={styles.decor} />
          </div>
        </div>
        <div className={styles.moreActions}>
          <Link href="/#pricing" className={styles.secondaryBtn}>
            Смотреть все услуги
          </Link>
        </div>
      </div>
    </section>
  );
}