import { Montserrat, Wix_Madefor_Display } from "next/font/google";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import "./globals.css";
import Script from "next/script";
import YClientsInit from "@/components/common/YClientsInit/YClientsInit";
import CookieBanner from "@/components/common/CookieBanner/CookieBanner";
import YandexMetrika from "@/components/common/YandexMetrika/YandexMEtrika";

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
        <Header />
        <main>{children}</main>

        {/* Cookie баннер - теперь сам управляет состоянием */}
        <CookieBanner />

        {/* YandexMetrika теперь сам проверяет согласие */}
        <YandexMetrika />

        <YClientsInit />
        <Footer />
      </body>
    </html>
  );
}
