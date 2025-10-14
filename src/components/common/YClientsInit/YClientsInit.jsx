'use client';

import { useEffect } from 'react';

export default function YClientsInit() {
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.yc && typeof window.yc.initWidget === 'function') {
        window.yc.initWidget('https://w745741.yclients.com/widgetJS');
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return null; // этот компонент ничего не рендерит, он просто инициализирует
}
