'use client';

import { useEffect } from 'react';

export default function ScrollToPricing() {
  useEffect(() => {
    // Скроллим к секции Pricing после загрузки страницы
    const timer = setTimeout(() => {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
}

