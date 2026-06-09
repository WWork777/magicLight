import { Montserrat, Wix_Madefor_Display } from "next/font/google";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import "./globals.css";
import Script from "next/script";
import YClientsInit from "@/components/common/YClientsInit/YClientsInit";
import CookieBanner from "@/components/common/CookieBanner/CookieBanner";
import PromoModal from "@/components/common/PromoModal/PromoModal";
import YandexMetrika from "@/components/common/YandexMetrika/YandexMEtrika";
import NewYearTheme from "@/components/common/NewYearTheme/NewYearTheme";
import SpringTheme from "@/components/common/SpringTheme/SpringTheme";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const wixMadefor = Wix_Madefor_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
  variable: "--font-wix",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://epilyaciya-kemerovo.ru"),
  title: {
    default: "Волшебный свет - Лазерная эпиляция в Кемерово",
    template: "%s | Волшебный свет",
  },
  description:
    "Салон лазерной эпиляции «Волшебный свет» в Кемерово. Профессиональная эпиляция диодным лазером. Доступные цены, акции, скидки до 25%. Запись онлайн.",
  keywords: [
    "лазерная эпиляция",
    "эпиляция Кемерово",
    "салон эпиляции",
    "удаление волос",
    "диодный лазер",
    "эпиляция цена",
    "лазерная эпиляция Кемерово",
    "салон красоты Кемерово",
    "эпиляция бикини",
    "эпиляция ног",
    "эпиляция подмышек",
  ],
  authors: [{ name: "Волшебный свет" }],
  creator: "Волшебный свет",
  publisher: "Волшебный свет",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { rel: "icon", type: "image/svg+xml", url: "/favicon/favicon.svg" },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        url: "/favicon/favicon-96x96.png",
      },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://epilyaciya-kemerovo.ru",
    siteName: "Волшебный свет - Лазерная эпиляция в Кемерово",
    images: [
      {
        url: "https://epilyaciya-kemerovo.ru/images/Hero/Hero.webp",
        width: 1200,
        height: 630,
        alt: "Волшебный свет - Лазерная эпиляция в Кемерово",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Волшебный свет - Лазерная эпиляция в Кемерово",
    description:
      "Профессиональная лазерная эпиляция в Кемерово. Доступные цены, акции, скидки до 25%.",
    images: ["https://epilyaciya-kemerovo.ru/images/Hero/Hero.webp"],
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
  alternates: {
    canonical: "https://epilyaciya-kemerovo.ru",
  },
  verification: {
    yandex: "1182d3e45f9a86d6",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${wixMadefor.variable}`}>
      <head>
        {/* YCLIENTS скрипт */}
        <Script
          src="https://w745741.yclients.com/widgetJS"
          strategy="afterInteractive"
          charSet="UTF-8"
        />
      </head>

      <body>
        {/* Новогодняя тема */}
        {/* <NewYearTheme /> */}
        {/* Весенняя тема */}
        {/* <SpringTheme /> */}

        <Header />
        <main>{children}</main>

        {/* Cookie баннер - теперь сам управляет состоянием */}
        <CookieBanner />

        {/* Модалка акции 50% для новых (показ с задержкой для SEO) */}
        <PromoModal />

        {/* YandexMetrika теперь сам проверяет согласие */}
        <YandexMetrika />

        <YClientsInit />
        <Footer />
      </body>
    </html>
  );
}
