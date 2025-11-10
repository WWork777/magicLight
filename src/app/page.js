import Hero from '../components/sections/Hero/Hero';
import Benefits from '../components/sections/Benefits/Benefits';
import Pricing from '../components/sections/Pricing/Pricing';
import Studio from '../components/sections/Studio/Studio';
import SpecialOffers from '../components/sections/SpecialOffers/SpecialOffers';
import Reviews from '../components/sections/Reviews/Reviews';
import Contacts from '../components/sections/Contacts/Contacts';
import DiscountPromoModal from '@/components/common/DiscountPromoModal/DiscountPromoModal';

export async function generateMetadata() {
  return {
    title:
      'Услуги лазерной эпиляции по доступной цене в Кемерово - салон красоты «Волшебный свет»',
    description:
      'Широкий выбор самых эффективных методов удаления волос по заманчивым ценам. Комфортная эпиляция от опытных мастеров с качественным оборудованием. Акции каждый месяц!',
    alternates: {
      canonical: 'https://epilyaciya-kemerovo.ru',
    },
    openGraph: {
      title: `Услуги лазерной эпиляции по доступной цене в Кемерово - салон красоты «Волшебный свет»`,
      description: `Широкий выбор самых эффективных методов удаления волос по заманчивым ценам. Комфортная эпиляция от опытных мастеров с качественным оборудованием. Акции каждый месяц!`,
      url: 'https://epilyaciya-kemerovo.ru',
      siteName:
        'Услуги лазерной эпиляции по доступной цене в Кемерово - салон красоты «Волшебный свет»',
      images: [
        {
          url: `/images/Hero.webp`,
          width: 1200,
          height: 630,
          alt: `Услуги эпиляции по доступной цене в Кемерово`,
        },
      ],
      locale: 'ru_RU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title:
        'Услуги лазерной эпиляции по доступной цене в Кемерово - салон красоты «Волшебный свет»',
      description:
        'Широкий выбор самых эффективных методов удаления волос по заманчивым ценам. Комфортная эпиляция от опытных мастеров с качественным оборудованием. Акции каждый месяц!',
      images: [`/images/Hero.webp`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <Pricing />
      <SpecialOffers />
      <Studio />
      <Reviews />
      <Contacts />
      <DiscountPromoModal />
    </>
  );
}
