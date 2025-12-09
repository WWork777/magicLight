"use client";
import { useEffect } from "react";

export default function YandexMetrika() {
  useEffect(() => {
    // Проверяем согласие на обработку персональных данных
    const checkConsent = () => {
      if (typeof window === "undefined") return false;
      const consent = localStorage.getItem("cookieConsent");
      return consent === "accepted";
    };

    // Функция инициализации Яндекс.Метрики
    const initMetrika = () => {
      if (typeof window === "undefined") return;

      (function (m, e, t, r, i, k, a) {
        m[i] =
          m[i] ||
          function () {
            (m[i].a = m[i].a || []).push(arguments);
          };
        m[i].l = 1 * new Date();
        for (var j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) {
            return;
          }
        }
        (k = e.createElement(t)),
          (a = e.getElementsByTagName(t)[0]),
          (k.async = 1),
          (k.src = r),
          a.parentNode.insertBefore(k, a);
      })(
        window,
        document,
        "script",
        "https://mc.yandex.ru/metrika/tag.js",
        "ym"
      );

      if (window.ym) {
        window.ym(105359068, "init", {
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
        });
      }
    };

    // Если согласие уже дано, инициализируем сразу
    if (checkConsent()) {
      initMetrika();
    } else {
      // Слушаем событие согласия
      const handleConsent = () => {
        if (checkConsent()) {
          initMetrika();
        }
      };

      window.addEventListener("cookieConsentAccepted", handleConsent);
      window.addEventListener("storage", handleConsent);

      return () => {
        window.removeEventListener("cookieConsentAccepted", handleConsent);
        window.removeEventListener("storage", handleConsent);
      };
    }
  }, []);

  // Noscript версия - рендерим только на клиенте и только при согласии
  // На сервере не рендерим, чтобы избежать гидратации
  return null;
}
