import Hero from "../components/sections/Hero/Hero";
import Benefits from "../components/sections/Benefits/Benefits";
import Pricing from "../components/sections/Pricing/Pricing";
import Studio from "../components/sections/Studio/Studio";
import SpecialOffers from "../components/sections/SpecialOffers/SpecialOffers";
import Reviews from "../components/sections/Reviews/Reviews";
import Contacts from "../components/sections/Contacts/Contacts";

export async function generateMetadata() {
  const keywords = [
    "лазерная эпиляция Кемерово",
    "эпиляция цена",
    "салон эпиляции Кемерово",
    "лазерная эпиляция недорого",
    "удаление волос лазером",
    "диодный лазер эпиляция",
    "эпиляция бикини Кемерово",
    "эпиляция ног Кемерово",
    "эпиляция подмышек",
    "лазерная эпиляция акция",
    "скидка на эпиляцию",
    "эпиляция 25% скидка",
    "абонемент на эпиляцию",
    "курс лазерной эпиляции",
  ].join(", ");

  return {
    title:
      "Услуги лазерной эпиляции по доступной цене в Кемерово - салон красоты «Волшебный свет»",
    description:
      "Широкий выбор самых эффективных методов удаления волос по заманчивым ценам. Комфортная эпиляция от опытных мастеров с качественным оборудованием. Акции каждый месяц! Скидка 25% на 1, 4, 7, 10 посещение.",
    keywords,
    authors: [{ name: "Волшебный свет" }],
    alternates: {
      canonical: "https://epilyaciya-kemerovo.ru",
    },
    openGraph: {
      title: `Услуги лазерной эпиляции по доступной цене в Кемерово - салон красоты «Волшебный свет»`,
      description: `Широкий выбор самых эффективных методов удаления волос по заманчивым ценам. Комфортная эпиляция от опытных мастеров с качественным оборудованием. Акции каждый месяц!`,
      url: "https://epilyaciya-kemerovo.ru",
      siteName:
        "Услуги лазерной эпиляции по доступной цене в Кемерово - салон красоты «Волшебный свет»",
      images: [
        {
          url: `https://epilyaciya-kemerovo.ru/images/Hero/Hero.webp`,
          width: 1200,
          height: 630,
          alt: `Услуги эпиляции по доступной цене в Кемерово`,
        },
      ],
      locale: "ru_RU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Услуги лазерной эпиляции по доступной цене в Кемерово - салон красоты «Волшебный свет»",
      description:
        "Широкий выбор самых эффективных методов удаления волос по заманчивым ценам. Комфортная эпиляция от опытных мастеров с качественным оборудованием. Акции каждый месяц!",
      images: [`https://epilyaciya-kemerovo.ru/images/Hero/Hero.webp`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Волшебный свет",
    alternateName: "Салон лазерной эпиляции Волшебный свет",
    url: "https://epilyaciya-kemerovo.ru",
    logo: "https://epilyaciya-kemerovo.ru/icons/Header/logo.svg",
    image: "https://epilyaciya-kemerovo.ru/images/Hero/Hero.webp",
    description:
      "Салон лазерной эпиляции в Кемерово. Профессиональная эпиляция диодным лазером. Доступные цены, акции, скидки до 25%.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "пр. Шахтёров, 68А",
      addressLocality: "Кемерово",
      addressRegion: "Кемеровская область",
      postalCode: "650000",
      addressCountry: "RU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 55.354968,
      longitude: 86.087314,
    },
    telephone: "+79039166251",
    email: "t-kiva@yandex.ru",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    sameAs: [
      "https://t.me/Magic_Light_Laser",
      "https://max.ru/u/f9LHodD0cOLklVlmDG32_Tjj3hv6qCHhN-bIwpO72_v_tv80tIHKTLgb6y0",
      "https://vk.com/laser_vs42_kem",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "68",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Услуги лазерной эпиляции",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Лазерная эпиляция",
            description: "Профессиональная лазерная эпиляция диодным лазером",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "LPG массаж",
            description: "LPG массаж для коррекции фигуры",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Hero />
      <Benefits />
      <Pricing />
      <SpecialOffers />
      <Studio />
      <Reviews />
      <Contacts />
    </>
  );
}
