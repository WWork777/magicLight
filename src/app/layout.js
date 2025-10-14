"use client";

import { useState, useEffect } from "react";
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

export default function RootLayout({ children }) {
  // ⬇️ ВСТАВЛЯЕМ СЮДА
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "accepted") {
      setConsentGiven(true);
    }
  }, []);
  // ⬆️ ДО return

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

        {/* Cookie баннер и передача функции */}
        <CookieBanner onConsentGiven={() => setConsentGiven(true)} />

        {/* Метрика подключается только после согласия */}
        <YandexMetrika enabled={consentGiven} />

        <YClientsInit />
        <Footer />
      </body>
    </html>
  );
}
