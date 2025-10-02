// src/data/services.js
export const servicesData = {
  laser: {
    female: {
      Комплексы: [
        {
          id: 'lfc1',
          title: 'Бикини любое + подмышечные впадины',
          price: 1600,
          image: '/images/Pricing/BikiniPodmishki.webp',
        },
        {
          id: 'lfc2',
          title: 'Подмышечные впадины + голени',
          price: 2400,
          image: '/images/Pricing/PodmishkiGoleni.webp',
        },
        {
          id: 'lfc3',
          title: 'Бикини любое + голени',
          price: 2800,
          image: '/images/Pricing/BikiniGoleni.webp',
        },
        {
          id: 'lfc4',
          title: 'Бикини любое + голени + подмышки',
          price: 3000,
          image: '/images/Pricing/BikiniGoleniPodmishki.webp',
        },
        {
          id: 'lfc5',
          title: 'Бикини любое + ноги целиком + подмышки',
          price: 4000,
        },
      ],
      Ноги: [
        { id: 'lfl1', title: 'Голени (пальцы + колени)', price: 1900 },
        { id: 'lfl2', title: 'Ноги целиком', price: 3000 },
        { id: 'lfl3', title: 'Ягодицы', price: 800 },
        { id: 'lfl4', title: 'Бёдра (передняя сторона) + колени', price: 1100 },
        { id: 'lfl5', title: 'Бёдра (задняя сторона) + колени', price: 1100 },
        { id: 'lfl6', title: 'Бёдра полностью + колени', price: 1800 },
      ],
      Руки: [
        { id: 'lfr1', title: 'Подмышечные впадины', price: 600 },
        { id: 'lfr2', title: 'Плечи', price: 600 },
        { id: 'lfr3', title: 'Руки полностью', price: 1700 },
        { id: 'lfr4', title: 'Руки до локтя', price: 900 },
        { id: 'lfr5', title: 'Кисти + пальцы', price: 500 },
      ],
      Бикини: [
        { id: 'lfb1', title: 'Классическое бикини', price: 700 },
        { id: 'lfb2', title: 'Глубокое бикини', price: 1000 },
        {
          id: 'lfb3',
          title: 'Тотальное бикини (в т.ч. межъягодичка)',
          price: 1200,
        },
      ],
      Тело: [
        { id: 'lfb4', title: 'Спина полностью', price: 2000 },
        { id: 'lfb5', title: 'Живот полностью', price: 1000 },
        { id: 'lfb6', title: 'Линия живота', price: 300 },
        { id: 'lfb7', title: 'Живот низ', price: 800 },
        { id: 'lfb8', title: 'Ареолы', price: 400 },
      ],
      'Лицо и шея': [
        { id: 'lff1', title: 'Верхняя губа', price: 400 },
        { id: 'lff2', title: 'Лицо полностью', price: 1400 },
        { id: 'lff3', title: 'Лоб', price: 400 },
        { id: 'lff4', title: 'Межбровье', price: 200 },
        { id: 'lff5', title: 'Подбородок', price: 400 },
        { id: 'lff6', title: 'Уши', price: 350 },
        { id: 'lff7', title: 'Щёки', price: 400 },
        { id: 'lff8', title: 'Скула', price: 400 },
        { id: 'lff9', title: 'Бакенбарды', price: 400 },
      ],
    },

    male: {
      Комплексы: [
        {
          id: 'lmc1',
          title: 'Подмышечные впадины + шея передняя или задняя часть',
          price: 1500,
        },
        {
          id: 'lmc2',
          title: 'Подмышечные впадины + лицо полностью',
          price: 2800,
        },
      ],
      Ноги: [
        { id: 'lml1', title: 'Голень (пальцы + колени)', price: 3000 },
        { id: 'lml2', title: 'Ноги целиком', price: 4500 },
      ],
      Руки: [
        { id: 'lmr1', title: 'Подмышечные впадины', price: 800 },
        { id: 'lmr2', title: 'Плечи', price: 1500 },
        { id: 'lmr3', title: 'Руки полностью', price: 2500 },
        { id: 'lmr4', title: 'Предплечье', price: 1500 },
      ],
      Тело: [
        { id: 'lmt1', title: 'Спина полностью', price: 2500 },
        { id: 'lmt2', title: 'Живот полностью', price: 2500 },
        { id: 'lmt3', title: 'Линия живота', price: 1000 },
        { id: 'lmt4', title: 'Грудь мужская', price: 2500 },
      ],
      Шея: [
        { id: 'lmsh1', title: 'Шея (задняя часть)', price: 1000 },
        { id: 'lmsh2', title: 'Шея (передняя часть)', price: 1000 },
      ],
      Лицо: [
        { id: 'lmlf1', title: 'Щёки', price: 1000 },
        { id: 'lmlf2', title: 'Бакенбарды', price: 300 },
      ],
    },
  },

  lgp: {
    services: [
      { id: 'lgp1', title: 'Пробный сеанс', price: 800 },
      { id: 'lgp2', title: '1 сеанс 25мин/45мин', price: '1000/1100' },
      { id: 'lgp3', title: '10 сеансов 25мин/45мин', price: '8000/10000' },
      { id: 'lgp4', title: 'Костюм приобретается единожды', price: 800 },
    ],
  },
};
