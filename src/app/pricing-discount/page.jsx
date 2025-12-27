import Pricing from '@/components/sections/Pricing/Pricing';
import Hero from '@/components/sections/Hero/Hero';
import Benefits from '@/components/sections/Benefits/Benefits';
import Studio from '@/components/sections/Studio/Studio';
import SpecialOffers from '@/components/sections/SpecialOffers/SpecialOffers';
import Reviews from '@/components/sections/Reviews/Reviews';
import Contacts from '@/components/sections/Contacts/Contacts';
import ScrollToPricing from '@/components/common/ScrollToPricing/ScrollToPricing';

export async function generateMetadata() {
  return {
    title: 'Прайс со скидкой 25% - Волшебный свет',
    description:
      'Специальные цены со скидкой 25% на 1, 4, 7, 10 посещение. Лазерная эпиляция в Кемерово по выгодным ценам.',
    keywords:
      'лазерная эпиляция Кемерово со скидкой, эпиляция 25% скидка, прайс эпиляция Кемерово, акция эпиляция',
    openGraph: {
      title: 'Прайс со скидкой 25% - Волшебный свет',
      description:
        'Специальные цены со скидкой 25% на 1, 4, 7, 10 посещение. Лазерная эпиляция в Кемерово.',
      url: 'https://epilyaciya-kemerovo.ru/pricing-discount',
      siteName: 'Волшебный свет',
      images: [
        {
          url: 'https://epilyaciya-kemerovo.ru/images/Hero/Hero.webp',
          width: 1200,
          height: 630,
          alt: 'Прайс со скидкой - Волшебный свет',
        },
      ],
      locale: 'ru_RU',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: 'https://epilyaciya-kemerovo.ru/pricing-discount',
    },
  };
}

export default function PricingDiscountPage() {
  return (
    <>
      <ScrollToPricing />
      <Hero />
      <Benefits />
      <Pricing showDiscount={true} />
      <SpecialOffers />
      <Studio />
      <Reviews />
      <Contacts />
    </>
  );
}

