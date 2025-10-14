"use client";

import { useEffect, useState } from "react";

export default function YandexMetrika() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Проверяем согласие при загрузке
    const checkConsent = () => {
      const consent = localStorage.getItem("cookieConsent");
      if (consent === "accepted") {
        setEnabled(true);
      }
    };

    checkConsent();

    // Слушаем события изменения localStorage от CookieBanner
    const handleStorageChange = (e) => {
      if (e.key === "cookieConsent" && e.newValue === "accepted") {
        setEnabled(true);
      }
    };

    // Слушаем кастомные события
    const handleConsentAccepted = () => {
      setEnabled(true);
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("cookieConsentAccepted", handleConsentAccepted);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener(
        "cookieConsentAccepted",
        handleConsentAccepted
      );
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    (function (m, e, t, r, i, k, a) {
      m[i] =
        m[i] ||
        function () {
          (m[i].a = m[i].a || []).push(arguments);
        };
      m[i].l = 1 * new Date();
      for (let j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) return;
      }
      (k = e.createElement(t)),
        (a = e.getElementsByTagName(t)[0]),
        (k.async = 1),
        (k.src = r);
      a.parentNode.insertBefore(k, a);
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(104547765, "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    });
  }, [enabled]);

  if (!enabled) return null;

  return (
    <noscript>
      <div>
        <img
          src="https://mc.yandex.ru/watch/104547765"
          style={{ position: "absolute", left: "-9999px" }}
          alt=""
        />
      </div>
    </noscript>
  );
}
