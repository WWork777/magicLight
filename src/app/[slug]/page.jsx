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
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return {
      title: "Услуга не найдена | Волшебный свет",
      description: "Запрашиваемая услуга не найдена",
    };
  }

  const title = service.seoTitle || `${service.title} | Волшебный свет`;
  const description = service.seoDescription || service.description;
  const imageUrl = service.image 
    ? `https://epilyaciya-kemerovo.ru${service.image}`
    : "https://epilyaciya-kemerovo.ru/images/Hero/Hero.webp";
  const url = `https://epilyaciya-kemerovo.ru/${service.slug}`;

  return {
    title,
    description,
    keywords: [
      service.title,
      "лазерная эпиляция",
      "эпиляция Кемерово",
      "салон эпиляции",
      service.category === "laser" ? "диодный лазер" : "LPG массаж",
      service.group,
    ],
    openGraph: {
      title,
      description,
      url,
      siteName: "Волшебный свет - Лазерная эпиляция в Кемерово",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      locale: "ru_RU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
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