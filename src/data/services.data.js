// src/data/services.js

// Функция для создания SEO-friendly slug
function createSlug(text) {
  return text
    .toLowerCase()
    .replace(/ё/g, 'e')
    .replace(/[^a-zа-я0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Функция для создания SEO описания
function createSeoDescription(service, category, gender = '') {
  const genderText = gender === 'female' ? 'для женщин' : gender === 'male' ? 'для мужчин' : '';
  const categoryText = category === 'laser' ? 'лазерной эпиляции' : 'LPG массажа';
  
  return `Профессиональная услуга ${categoryText} ${genderText}: "${service.title}". Цена: ${service.price} руб. Современное оборудование, опытные специалисты. Запишитесь онлайн!`;
}

// Функция для создания SEO заголовка
function createSeoTitle(service, category, gender = '') {
  const genderText = gender === 'female' ? 'для женщин' : gender === 'male' ? 'для мужчин' : '';
  return `${service.title} | ${category === 'laser' ? 'Лазерная эпиляция' : 'LPG массаж'} ${genderText} ${service.price} руб`;
}

export const servicesData = {
  // ЛАЗЕРНАЯ ЭПИЛЯЦИЯ - ЖЕНЩИНЫ - КОМПЛЕКСЫ
  lfc1: {
    id: "lfc1",
    slug: createSlug("bikini-lyuboe-podmyshechnye-vpadiny-lazernaya-epilyaciya"),
    category: "laser",
    gender: "female",
    group: "Комплексы",
    title: "Бикини любое + подмышечные впадины",
    price: 1600,
    image: "/images/Pricing/BikiniPodmishki.webp",
    description: "Комплексная эпиляция бикини + подмышки",
    fullDescription: "Профессиональная лазерная эпиляция зоны бикини и подмышечных впадин. Проводится на современном диодном лазере последнего поколения с системой охлаждения для максимального комфорта. Процедура безопасна, эффективна и обеспечивает долгосрочный результат. Идеально подходит для подготовки к летнему сезону или важным событиям.",
    features: ["Безопасная технология", "Долгосрочный результат", "Минимальный дискомфорт", "Быстрое выполнение"],
    duration: "20-30 минут",
    recommendedSessions: 6,
    seoTitle: createSeoTitle({title: "Бикини любое + подмышечные впадины", price: 1600}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Бикини любое + подмышечные впадины", price: 1600}, "laser", "female")
  },

  lfc2: {
    id: "lfc2",
    slug: createSlug("подмышечные впадины голени лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Комплексы",
    title: "Подмышечные впадины + голени",
    price: 2400,
    image: "/images/Pricing/PodmishkiGoleni.webp",
    description: "Эпиляция подмышек и голеней в одном сеансе",
    fullDescription: "Комбинированная лазерная эпиляция подмышечных впадин и голеней. Экономит время и деньги. Используется передовая лазерная технология, которая воздействует непосредственно на волосяные фолликулы, не повреждая окружающие ткани.",
    features: ["Экономия времени", "Выгодная цена", "Высокая эффективность", "Комфортная процедура"],
    duration: "30-40 минут",
    recommendedSessions: 6,
    seoTitle: createSeoTitle({title: "Подмышечные впадины + голени", price: 2400}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Подмышечные впадины + голени", price: 2400}, "laser", "female")
  },

  lfc3: {
    id: "lfc3",
    slug: createSlug("бикини любое голени лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Комплексы",
    title: "Бикини любое + голени",
    price: 2800,
    image: "/images/Pricing/BikiniGoleni.webp",
    description: "Комплекс бикини и голеней",
    fullDescription: "Эффективная процедура для удаления волос в зоне бикини и на голенях. Обеспечивает гладкость кожи на длительный срок. Подходит для всех типов кожи.",
    duration: "35-45 минут",
    recommendedSessions: 8,
    seoTitle: createSeoTitle({title: "Бикини любое + голени", price: 2800}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Бикини любое + голени", price: 2800}, "laser", "female")
  },

  lfc4: {
    id: "lfc4",
    slug: createSlug("бикини любое голени подмышки лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Комплексы",
    title: "Бикини любое + голени + подмышки",
    price: 3000,
    image: "/images/Pricing/BikiniGoleniPodmishki.webp",
    description: "Полный комплекс для нижней части тела",
    fullDescription: "Наиболее популярный комплекс для женщин. Обработка трех зон за одну процедуру. Максимальная экономия времени при сохранении высокого качества результата.",
    features: ["Максимальная экономия", "Комплексный подход", "Быстрый результат", "Выгодная цена"],
    duration: "45-55 минут",
    recommendedSessions: 8,
    seoTitle: createSeoTitle({title: "Бикини любое + голени + подмышки", price: 3000}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Бикини любое + голени + подмышки", price: 3000}, "laser", "female")
  },

  lfc5: {
    id: "lfc5",
    slug: createSlug("бикини любое ноги целиком подмышки лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Комплексы",
    title: "Бикини любое + ноги целиком + подмышки",
    price: 4000,
    image: "/images/Pricing/bikiniNogiPodmishki.webp",
    description: "Полный комплекс эпиляции для женщин",
    fullDescription: "Комплексная обработка всех проблемных зон за один сеанс. Идеальное решение для тех, кто хочет получить максимальный результат за минимальное количество посещений.",
    duration: "60-75 минут",
    recommendedSessions: 10,
    seoTitle: createSeoTitle({title: "Бикини любое + ноги целиком + подмышки", price: 4000}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Бикини любое + ноги целиком + подмышки", price: 4000}, "laser", "female")
  },

  // ЛАЗЕРНАЯ ЭПИЛЯЦИЯ - ЖЕНЩИНЫ - НОГИ
  lfl1: {
    id: "lfl1",
    slug: createSlug("голени пальцы колени лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Ноги",
    title: "Голени (пальцы + колени)",
    price: 1900,
    image: "/images/Pricing/goleniPalci.webp",
    description: "Эпиляция голеней с обработкой пальцев и коленей",
    fullDescription: "Тщательная обработка всей поверхности голеней, включая пальцы ног и колени. Обеспечивает гладкость кожи на длительный период.",
    duration: "25-35 минут",
    recommendedSessions: 6,
    seoTitle: createSeoTitle({title: "Голени (пальцы + колени)", price: 1900}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Голени (пальцы + колени)", price: 1900}, "laser", "female")
  },

  lfl2: {
    id: "lfl2",
    slug: createSlug("ноги целиком лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Ноги",
    title: "Ноги целиком",
    price: 3000,
    image: "/images/Pricing/legs.webp",
    description: "Полная эпиляция ног",
    fullDescription: "Обработка всей поверхности ног от бедер до стоп. Комплексный подход к удалению волос на нижних конечностях.",
    duration: "40-50 минут",
    recommendedSessions: 8,
    seoTitle: createSeoTitle({title: "Ноги целиком", price: 3000}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Ноги целиком", price: 3000}, "laser", "female")
  },

  lfl3: {
    id: "lfl3",
    slug: createSlug("ягодицы лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Ноги",
    title: "Ягодицы",
    price: 800,
    image: "/images/Pricing/yagodici.webp",
    description: "Эпиляция зоны ягодиц",
    fullDescription: "Процедура удаления волос в зоне ягодиц. Обеспечивает комфорт и эстетичный вид.",
    duration: "15-20 минут",
    recommendedSessions: 6,
    seoTitle: createSeoTitle({title: "Ягодицы", price: 800}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Ягодицы", price: 800}, "laser", "female")
  },

  lfl4: {
    id: "lfl4",
    slug: createSlug("бедра передняя сторона колени лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Ноги",
    title: "Бёдра (передняя сторона) + колени",
    price: 1100,
    image: "/images/Pricing/bedra.webp",
    description: "Эпиляция передней поверхности бедер и коленей",
    fullDescription: "Обработка передней части бедер с включением зоны коленей. Особенно актуально в летний период.",
    duration: "20-25 минут",
    recommendedSessions: 6,
    seoTitle: createSeoTitle({title: "Бёдра (передняя сторона) + колени", price: 1100}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Бёдра (передняя сторона) + колени", price: 1100}, "laser", "female")
  },

  lfl5: {
    id: "lfl5",
    slug: createSlug("бедра задняя сторона колени лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Ноги",
    title: "Бёдра (задняя сторона) + колени",
    price: 1100,
    image: "/images/Pricing/bedraZadnie.webp",
    description: "Эпиляция задней поверхности бедер и коленей",
    fullDescription: "Обработка задней части бедер с включением зоны коленей. Процедура выполняется быстро и комфортно.",
    duration: "20-25 минут",
    recommendedSessions: 6,
    seoTitle: createSeoTitle({title: "Бёдра (задняя сторона) + колени", price: 1100}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Бёдра (задняя сторона) + колени", price: 1100}, "laser", "female")
  },

  lfl6: {
    id: "lfl6",
    slug: createSlug("бедра полностью колени лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Ноги",
    title: "Бёдра полностью + колени",
    price: 1800,
    image: "/images/Pricing/bedraFull.webp",
    description: "Полная эпиляция бедер с коленями",
    fullDescription: "Комплексная обработка всех поверхностей бедер и коленей. Обеспечивает равномерное удаление волос.",
    duration: "30-40 минут",
    recommendedSessions: 6,
    seoTitle: createSeoTitle({title: "Бёдра полностью + колени", price: 1800}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Бёдра полностью + колени", price: 1800}, "laser", "female")
  },

  // ЛАЗЕРНАЯ ЭПИЛЯЦИЯ - ЖЕНЩИНЫ - РУКИ
  lfr1: {
    id: "lfr1",
    slug: createSlug("подмышечные впадины лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Руки",
    title: "Подмышечные впадины",
    price: 600,
    image: "/images/Pricing/bodpmishkiVpadini.webp",
    description: "Эпиляция подмышечных впадин",
    fullDescription: "Быстрая и эффективная процедура удаления волос в подмышечных впадинах. Обеспечивает долговременную гладкость.",
    duration: "10-15 минут",
    recommendedSessions: 6,
    seoTitle: createSeoTitle({title: "Подмышечные впадины", price: 600}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Подмышечные впадины", price: 600}, "laser", "female")
  },

  lfr2: {
    id: "lfr2",
    slug: createSlug("плечи лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Руки",
    title: "Плечи",
    price: 600,
    image: "/images/Pricing/device.webp",
    description: "Эпиляция зоны плеч",
    fullDescription: "Удаление волос на плечах. Процедура особенно популярна в летний период.",
    duration: "15-20 минут",
    recommendedSessions: 6,
    seoTitle: createSeoTitle({title: "Плечи", price: 600}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Плечи", price: 600}, "laser", "female")
  },

  lfr3: {
    id: "lfr3",
    slug: createSlug("руки полностью лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Руки",
    title: "Руки полностью",
    price: 1700,
    image: "/images/Pricing/rukiFull.webp",
    description: "Полная эпиляция рук",
    fullDescription: "Обработка рук от плеч до кистей. Комплексное решение для гладкой кожи рук.",
    duration: "30-40 минут",
    recommendedSessions: 6,
    seoTitle: createSeoTitle({title: "Руки полностью", price: 1700}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Руки полностью", price: 1700}, "laser", "female")
  },

  lfr4: {
    id: "lfr4",
    slug: createSlug("руки до локтя лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Руки",
    title: "Руки до локтя",
    price: 900,
    image: "/images/Pricing/rukiDoLokti.webp",
    description: "Эпиляция рук до локтей",
    fullDescription: "Обработка верхней части рук от плеч до локтей. Идеально для повседневного комфорта.",
    duration: "20-25 минут",
    recommendedSessions: 6,
    seoTitle: createSeoTitle({title: "Руки до локтя", price: 900}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Руки до локтя", price: 900}, "laser", "female")
  },

  lfr5: {
    id: "lfr5",
    slug: createSlug("кисти пальцы лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Руки",
    title: "Кисти + пальцы",
    price: 500,
    image: "/images/Pricing/fingers.webp",
    description: "Эпиляция кистей и пальцев рук",
    fullDescription: "Тонкая работа по удалению волос с кистей и пальцев рук. Выполняется с особой аккуратностью.",
    duration: "10-15 минут",
    recommendedSessions: 6,
    seoTitle: createSeoTitle({title: "Кисти + пальцы", price: 500}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Кисти + пальцы", price: 500}, "laser", "female")
  },

  // ЛАЗЕРНАЯ ЭПИЛЯЦИЯ - ЖЕНЩИНЫ - БИКИНИ
  lfb1: {
    id: "lfb1",
    slug: createSlug("классическое бикини лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Бикини",
    title: "Классическое бикини",
    price: 700,
    image: "/images/Pricing/bikiniClassic.webp",
    description: "Классическая эпиляция зоны бикини",
    fullDescription: "Обработка зоны по линии белья. Базовая процедура для поддержания эстетичного вида.",
    duration: "15-20 минут",
    recommendedSessions: 8,
    seoTitle: createSeoTitle({title: "Классическое бикини", price: 700}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Классическое бикини", price: 700}, "laser", "female")
  },

  lfb2: {
    id: "lfb2",
    slug: createSlug("глубокое бикини лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Бикини",
    title: "Глубокое бикини",
    price: 1000,
    image: "/images/Pricing/bikiniDeep.webp",
    description: "Глубокая эпиляция зоны бикини",
    fullDescription: "Расширенная обработка интимной зоны. Обеспечивает максимальный комфорт и эстетику.",
    duration: "20-25 минут",
    recommendedSessions: 8,
    seoTitle: createSeoTitle({title: "Глубокое бикини", price: 1000}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Глубокое бикини", price: 1000}, "laser", "female")
  },

  lfb3: {
    id: "lfb3",
    slug: createSlug("тотальное бикини межъягодичка лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Бикини",
    title: "Тотальное бикини (в т.ч. межъягодичка)",
    price: 1200,
    image: "/images/Pricing/bikiniTotal.webp",
    description: "Полная эпиляция интимной зоны",
    fullDescription: "Комплексная обработка всей интимной зоны, включая межъягодичную область. Максимальный уровень удаления волос.",
    duration: "25-30 минут",
    recommendedSessions: 8,
    seoTitle: createSeoTitle({title: "Тотальное бикини (в т.ч. межъягодичка)", price: 1200}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Тотальное бикини (в т.ч. межъягодичка)", price: 1200}, "laser", "female")
  },

  // ЛАЗЕРНАЯ ЭПИЛЯЦИЯ - ЖЕНЩИНЫ - ТЕЛО
  lfb4: {
    id: "lfb4",
    slug: createSlug("спина полностью лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Тело",
    title: "Спина полностью",
    price: 2000,
    image: "/images/Pricing/spinaFull.webp",
    description: "Полная эпиляция спины",
    fullDescription: "Обработка всей поверхности спины. Особенно актуально для летнего периода и открытой одежды.",
    duration: "30-40 минут",
    recommendedSessions: 8,
    seoTitle: createSeoTitle({title: "Спина полностью", price: 2000}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Спина полностью", price: 2000}, "laser", "female")
  },

  lfb5: {
    id: "lfb5",
    slug: createSlug("живот полностью лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Тело",
    title: "Живот полностью",
    price: 1000,
    image: "/images/Pricing/jivotFull.webp",
    description: "Эпиляция всего живота",
    fullDescription: "Удаление волос на всей поверхности живота. Обеспечивает эстетичный вид и комфорт.",
    duration: "20-25 минут",
    recommendedSessions: 6,
    seoTitle: createSeoTitle({title: "Живот полностью", price: 1000}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Живот полностью", price: 1000}, "laser", "female")
  },

  lfb6: {
    id: "lfb6",
    slug: createSlug("линия живота лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Тело",
    title: "Линия живота",
    price: 300,
    image: "/images/Pricing/laserJivot.webp",
    description: "Эпиляция линии живота",
    fullDescription: "Удаление волос по вертикальной линии живота. Быстрая и эффективная процедура.",
    duration: "10 минут",
    recommendedSessions: 6,
    seoTitle: createSeoTitle({title: "Линия живота", price: 300}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Линия живота", price: 300}, "laser", "female")
  },

  lfb7: {
    id: "lfb7",
    slug: createSlug("живот низ лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Тело",
    title: "Живот низ",
    price: 800,
    image: "/images/Pricing/jivotFull.webp",
    description: "Эпиляция нижней части живота",
    fullDescription: "Обработка нижней части живота. Часто сочетается с эпиляцией зоны бикини.",
    duration: "15-20 минут",
    recommendedSessions: 6,
    seoTitle: createSeoTitle({title: "Живот низ", price: 800}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Живот низ", price: 800}, "laser", "female")
  },

  lfb8: {
    id: "lfb8",
    slug: createSlug("ареолы лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Тело",
    title: "Ареолы",
    price: 400,
    image: "/images/Pricing/areol.webp",
    description: "Эпиляция ареол",
    fullDescription: "Аккуратное удаление волос в зоне ареол. Выполняется с особой осторожностью и точностью.",
    duration: "10 минут",
    recommendedSessions: 6,
    seoTitle: createSeoTitle({title: "Ареолы", price: 400}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Ареолы", price: 400}, "laser", "female")
  },

  // ЛАЗЕРНАЯ ЭПИЛЯЦИЯ - ЖЕНЩИНЫ - ЛИЦО И ШЕЯ
  lff1: {
    id: "lff1",
    slug: createSlug("верхняя губа лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Лицо и шея",
    title: "Верхняя губа",
    price: 400,
    image: "/images/Pricing/gubaVerh.webp",
    description: "Эпиляция верхней губы",
    fullDescription: "Удаление волос над верхней губой. Быстрая процедура для поддержания ухоженного вида.",
    duration: "5-10 минут",
    recommendedSessions: 6,
    seoTitle: createSeoTitle({title: "Верхняя губа", price: 400}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Верхняя губа", price: 400}, "laser", "female")
  },

  lff2: {
    id: "lff2",
    slug: createSlug("лицо полностью лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Лицо и шея",
    title: "Лицо полностью",
    price: 1400,
    image: "/images/Pricing/face.webp",
    description: "Полная эпиляция лица",
    fullDescription: "Комплексная обработка всех зон лица. Обеспечивает идеально гладкую кожу без необходимости ежедневного бритья.",
    duration: "20-30 минут",
    recommendedSessions: 8,
    seoTitle: createSeoTitle({title: "Лицо полностью", price: 1400}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Лицо полностью", price: 1400}, "laser", "female")
  },

  lff3: {
    id: "lff3",
    slug: createSlug("лоб лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Лицо и шея",
    title: "Лоб",
    price: 400,
    image: "/images/Pricing/BikiniGoleniPodmishki.webp",
    description: "Эпиляция лба",
    fullDescription: "Удаление волос на лбу. Процедура выполняется быстро и безболезненно.",
    duration: "10 минут",
    recommendedSessions: 6,
    seoTitle: createSeoTitle({title: "Лоб", price: 400}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Лоб", price: 400}, "laser", "female")
  },

  lff4: {
    id: "lff4",
    slug: createSlug("межбровье лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Лицо и шея",
    title: "Межбровье",
    price: 200,
    image: "/images/Pricing/mejBrovi.webp",
    description: "Коррекция межбровья",
    fullDescription: "Формирование четкой линии бровей. Помогает поддерживать ухоженный вид между визитами к косметологу.",
    duration: "5 минут",
    recommendedSessions: 6,
    seoTitle: createSeoTitle({title: "Межбровье", price: 200}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Межбровье", price: 200}, "laser", "female")
  },

  lff5: {
    id: "lff5",
    slug: createSlug("подбородок лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Лицо и шея",
    title: "Подбородок",
    price: 400,
    image: "/images/Pricing/bodborodok.webp",
    description: "Эпиляция подбородка",
    fullDescription: "Удаление волос на подбородке. Процедура особенно популярна среди женщин с гормональными особенностями.",
    duration: "10 минут",
    recommendedSessions: 6,
    seoTitle: createSeoTitle({title: "Подбородок", price: 400}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Подбородок", price: 400}, "laser", "female")
  },

  lff6: {
    id: "lff6",
    slug: createSlug("уши лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Лицо и шея",
    title: "Уши",
    price: 350,
    image: "/images/Pricing/ushi.webp",
    description: "Эпиляция ушных раковин",
    fullDescription: "Удаление волос на ушах и вокруг них. Обеспечивает эстетичный вид и комфорт.",
    duration: "5-10 минут",
    recommendedSessions: 6,
    seoTitle: createSeoTitle({title: "Уши", price: 350}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Уши", price: 350}, "laser", "female")
  },

  lff7: {
    id: "lff7",
    slug: createSlug("щеки лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Лицо и шея",
    title: "Щёки",
    price: 400,
    image: "/images/Pricing/sheka.webp",
    description: "Эпиляция щек",
    fullDescription: "Удаление волос на щеках. Процедура выполняется быстро и обеспечивает долговременный результат.",
    duration: "10-15 минут",
    recommendedSessions: 6,
    seoTitle: createSeoTitle({title: "Щёки", price: 400}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Щёки", price: 400}, "laser", "female")
  },

  lff8: {
    id: "lff8",
    slug: createSlug("скула лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Лицо и шея",
    title: "Скула",
    price: 400,
    image: "/images/Pricing/ushi.webp",
    description: "Эпиляция скул",
    fullDescription: "Удаление волос в зоне скул. Процедура помогает поддерживать чистый контур лица.",
    duration: "10 минут",
    recommendedSessions: 6,
    seoTitle: createSeoTitle({title: "Скула", price: 400}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Скула", price: 400}, "laser", "female")
  },

  lff9: {
    id: "lff9",
    slug: createSlug("бакенбарды лазерная эпиляция"),
    category: "laser",
    gender: "female",
    group: "Лицо и шея",
    title: "Бакенбарды",
    price: 400,
    image: "/images/Pricing/bakenbardi.webp",
    description: "Эпиляция бакенбардов",
    fullDescription: "Удаление волос в зоне бакенбардов. Обеспечивает четкую линию роста волос.",
    duration: "10 минут",
    recommendedSessions: 6,
    seoTitle: createSeoTitle({title: "Бакенбарды", price: 400}, "laser", "female"),
    seoDescription: createSeoDescription({title: "Бакенбарды", price: 400}, "laser", "female")
  },

  // ЛАЗЕРНАЯ ЭПИЛЯЦИЯ - МУЖЧИНЫ - КОМПЛЕКСЫ
  lmc1: {
    id: "lmc1",
    slug: createSlug("подмышечные впадины шея передняя задняя часть лазерная эпиляция"),
    category: "laser",
    gender: "male",
    group: "Комплексы",
    title: "Подмышечные впадины + шея передняя или задняя часть",
    price: 1500,
    image: "/images/Pricing/lgp1.webp",
    description: "Комплекс эпиляции для мужчин",
    fullDescription: "Комбинированная процедура для подмышек и шеи. Идеальное решение для мужчин, следящих за своей внешностью.",
    duration: "25-35 минут",
    recommendedSessions: 8,
    seoTitle: createSeoTitle({title: "Подмышечные впадины + шея передняя или задняя часть", price: 1500}, "laser", "male"),
    seoDescription: createSeoDescription({title: "Подмышечные впадины + шея передняя или задняя часть", price: 1500}, "laser", "male")
  },

  lmc2: {
    id: "lmc2",
    slug: createSlug("подмышечные впадины лицо полностью лазерная эпиляция"),
    category: "laser",
    gender: "male",
    group: "Комплексы",
    title: "Подмышечные впадины + лицо полностью",
    price: 2800,
    image: "/images/Pricing/lgp2.webp",
    description: "Комплекс для лица и подмышек",
    fullDescription: "Полная обработка лица и подмышечных впадин. Избавляет от необходимости ежедневного бритья.",
    duration: "40-50 минут",
    recommendedSessions: 8,
    seoTitle: createSeoTitle({title: "Подмышечные впадины + лицо полностью", price: 2800}, "laser", "male"),
    seoDescription: createSeoDescription({title: "Подмышечные впадины + лицо полностью", price: 2800}, "laser", "male")
  },

  // ЛАЗЕРНАЯ ЭПИЛЯЦИЯ - МУЖЧИНЫ - НОГИ
  lml1: {
    id: "lml1",
    slug: createSlug("голень пальцы колени лазерная эпиляция мужчины"),
    category: "laser",
    gender: "male",
    group: "Ноги",
    title: "Голень (пальцы + колени)",
    price: 3000,
    image: "/images/Pricing/goleniPalci.webp",
    description: "Эпиляция мужских голеней",
    fullDescription: "Обработка голеней с пальцами и коленями. Особенно актуально для спортсменов и активных мужчин.",
    duration: "30-40 минут",
    recommendedSessions: 8,
    seoTitle: createSeoTitle({title: "Голень (пальцы + колени)", price: 3000}, "laser", "male"),
    seoDescription: createSeoDescription({title: "Голень (пальцы + колени)", price: 3000}, "laser", "male")
  },

  lml2: {
    id: "lml2",
    slug: createSlug("ноги целиком лазерная эпиляция мужчины"),
    category: "laser",
    gender: "male",
    group: "Ноги",
    title: "Ноги целиком",
    price: 4500,
    image: "/images/Pricing/legs.webp",
    description: "Полная эпиляция мужских ног",
    fullDescription: "Комплексная обработка всех частей ног. Обеспечивает гладкость кожи на длительный срок.",
    duration: "50-60 минут",
    recommendedSessions: 10,
    seoTitle: createSeoTitle({title: "Ноги целиком", price: 4500}, "laser", "male"),
    seoDescription: createSeoDescription({title: "Ноги целиком", price: 4500}, "laser", "male")
  },

  // ЛАЗЕРНАЯ ЭПИЛЯЦИЯ - МУЖЧИНЫ - РУКИ
  lmr1: {
    id: "lmr1",
    slug: createSlug("подмышечные впадины лазерная эпиляция мужчины"),
    category: "laser",
    gender: "male",
    group: "Руки",
    title: "Подмышечные впадины",
    price: 800,
    image: "/images/Pricing/bodpmishkiVpadini.webp",
    description: "Эпиляция подмышек для мужчин",
    fullDescription: "Удаление волос в подмышечных впадинах. Снижает потоотделение и неприятный запах.",
    duration: "15-20 минут",
    recommendedSessions: 8,
    seoTitle: createSeoTitle({title: "Подмышечные впадины", price: 800}, "laser", "male"),
    seoDescription: createSeoDescription({title: "Подмышечные впадины", price: 800}, "laser", "male")
  },

  lmr2: {
    id: "lmr2",
    slug: createSlug("плечи лазерная эпиляция мужчины"),
    category: "laser",
    gender: "male",
    group: "Руки",
    title: "Плечи",
    price: 1500,
    image: "/images/Pricing/lgp2.webp",
    description: "Эпиляция мужских плеч",
    fullDescription: "Обработка плечевой зоны. Обеспечивает эстетичный вид и комфорт.",
    duration: "20-25 минут",
    recommendedSessions: 8,
    seoTitle: createSeoTitle({title: "Плечи", price: 1500}, "laser", "male"),
    seoDescription: createSeoDescription({title: "Плечи", price: 1500}, "laser", "male")
  },

  lmr3: {
    id: "lmr3",
    slug: createSlug("руки полностью лазерная эпиляция мужчины"),
    category: "laser",
    gender: "male",
    group: "Руки",
    title: "Руки полностью",
    price: 2500,
    image: "/images/Pricing/rukiFull.webp",
    description: "Полная эпиляция мужских рук",
    fullDescription: "Обработка рук от плеч до кистей. Избавляет от необходимости регулярного бритья рук.",
    duration: "35-45 минут",
    recommendedSessions: 8,
    seoTitle: createSeoTitle({title: "Руки полностью", price: 2500}, "laser", "male"),
    seoDescription: createSeoDescription({title: "Руки полностью", price: 2500}, "laser", "male")
  },

  lmr4: {
    id: "lmr4",
    slug: createSlug("предплечье лазерная эпиляция"),
    category: "laser",
    gender: "male",
    group: "Руки",
    title: "Предплечье",
    price: 1500,
    image: "/images/Pricing/rukiDoLokti.webp",
    description: "Эпиляция предплечий",
    fullDescription: "Обработка зоны от локтей до кистей. Особенно популярно среди деловых мужчин.",
    duration: "20-30 минут",
    recommendedSessions: 8,
    seoTitle: createSeoTitle({title: "Предплечье", price: 1500}, "laser", "male"),
    seoDescription: createSeoDescription({title: "Предплечье", price: 1500}, "laser", "male")
  },

  // ЛАЗЕРНАЯ ЭПИЛЯЦИЯ - МУЖЧИНЫ - ТЕЛО
  lmt1: {
    id: "lmt1",
    slug: createSlug("спина полностью лазерная эпиляция мужчины"),
    category: "laser",
    gender: "male",
    group: "Тело",
    title: "Спина полностью",
    price: 2500,
    image: "/images/Pricing/spinaFull.webp",
    description: "Полная эпиляция мужской спины",
    fullDescription: "Обработка всей поверхности спины. Устраняет проблему волосатой спины.",
    duration: "35-45 минут",
    recommendedSessions: 10,
    seoTitle: createSeoTitle({title: "Спина полностью", price: 2500}, "laser", "male"),
    seoDescription: createSeoDescription({title: "Спина полностью", price: 2500}, "laser", "male")
  },

  lmt2: {
    id: "lmt2",
    slug: createSlug("живот полностью лазерная эпиляция мужчины"),
    category: "laser",
    gender: "male",
    group: "Тело",
    title: "Живот полностью",
    price: 2500,
    image: "/images/Pricing/jivotFull.webp",
    description: "Эпиляция мужского живота",
    fullDescription: "Полная обработка живота. Обеспечивает эстетичный вид и комфорт.",
    duration: "25-35 минут",
    recommendedSessions: 8,
    seoTitle: createSeoTitle({title: "Живот полностью", price: 2500}, "laser", "male"),
    seoDescription: createSeoDescription({title: "Живот полностью", price: 2500}, "laser", "male")
  },

  lmt3: {
    id: "lmt3",
    slug: createSlug("линия живота лазерная эпиляция мужчины"),
    category: "laser",
    gender: "male",
    group: "Тело",
    title: "Линия живота",
    price: 1000,
    image: "/images/Pricing/laserJivot.webp",
    description: "Эпиляция линии живота у мужчин",
    fullDescription: "Удаление волос по вертикальной линии живота. Быстрая и эффективная процедура.",
    duration: "10-15 минут",
    recommendedSessions: 8,
    seoTitle: createSeoTitle({title: "Линия живота", price: 1000}, "laser", "male"),
    seoDescription: createSeoDescription({title: "Линия живота", price: 1000}, "laser", "male")
  },

  lmt4: {
    id: "lmt4",
    slug: createSlug("грудь мужская лазерная эпиляция"),
    category: "laser",
    gender: "male",
    group: "Тело",
    title: "Грудь мужская",
    price: 2500,
    image: "/images/Pricing/lgp3.webp",
    description: "Эпиляция мужской груди",
    fullDescription: "Удаление волос на груди. Особенно популярно среди спортсменов и моделей.",
    duration: "25-35 минут",
    recommendedSessions: 8,
    seoTitle: createSeoTitle({title: "Грудь мужская", price: 2500}, "laser", "male"),
    seoDescription: createSeoDescription({title: "Грудь мужская", price: 2500}, "laser", "male")
  },

  // ЛАЗЕРНАЯ ЭПИЛЯЦИЯ - МУЖЧИНЫ - ШЕЯ
  lmsh1: {
    id: "lmsh1",
    slug: createSlug("шея задняя часть лазерная эпиляция"),
    category: "laser",
    gender: "male",
    group: "Шея",
    title: "Шея (задняя часть)",
    price: 1000,
    image: "/images/Pricing/sheya.webp",
    description: "Эпиляция задней части шеи",
    fullDescription: "Обработка волос на задней поверхности шеи. Обеспечивает аккуратный внешний вид.",
    duration: "15-20 минут",
    recommendedSessions: 8,
    seoTitle: createSeoTitle({title: "Шея (задняя часть)", price: 1000}, "laser", "male"),
    seoDescription: createSeoDescription({title: "Шея (задняя часть)", price: 1000}, "laser", "male")
  },

  lmsh2: {
    id: "lmsh2",
    slug: createSlug("шея передняя часть лазерная эпиляция"),
    category: "laser",
    gender: "male",
    group: "Шея",
    title: "Шея (передняя часть)",
    price: 1000,
    image: "/images/Pricing/sheya.webp",
    description: "Эпиляция передней части шеи",
    fullDescription: "Удаление волос на передней поверхности шеи. Помогает поддерживать ухоженный вид.",
    duration: "15-20 минут",
    recommendedSessions: 8,
    seoTitle: createSeoTitle({title: "Шея (передняя часть)", price: 1000}, "laser", "male"),
    seoDescription: createSeoDescription({title: "Шея (передняя часть)", price: 1000}, "laser", "male")
  },

  // ЛАЗЕРНАЯ ЭПИЛЯЦИЯ - МУЖЧИНЫ - ЛИЦО
  lmlf1: {
    id: "lmlf1",
    slug: createSlug("щеки лазерная эпиляция мужчины"),
    category: "laser",
    gender: "male",
    group: "Лицо",
    title: "Щёки",
    price: 1000,
    image: "/images/Pricing/sheka.webp",
    description: "Эпиляция мужских щек",
    fullDescription: "Удаление волос на щеках. Избавляет от необходимости ежедневного бритья.",
    duration: "15-20 минут",
    recommendedSessions: 8,
    seoTitle: createSeoTitle({title: "Щёки", price: 1000}, "laser", "male"),
    seoDescription: createSeoDescription({title: "Щёки", price: 1000}, "laser", "male")
  },

  lmlf2: {
    id: "lmlf2",
    slug: createSlug("бакенбарды лазерная эпиляция мужчины"),
    category: "laser",
    gender: "male",
    group: "Лицо",
    title: "Бакенбарды",
    price: 300,
    image: "/images/Pricing/bakenbardi.webp",
    description: "Коррекция бакенбардов",
    fullDescription: "Формирование четких линий бакенбардов. Обеспечивает аккуратный внешний вид.",
    duration: "10 минут",
    recommendedSessions: 6,
    seoTitle: createSeoTitle({title: "Бакенбарды", price: 300}, "laser", "male"),
    seoDescription: createSeoDescription({title: "Бакенбарды", price: 300}, "laser", "male")
  },

  // LGP - РАЗОВЫЕ ПОСЕЩЕНИЯ
  lgp1: {
    id: "lgp1",
    slug: createSlug("первое пробное посещение lpg массаж"),
    category: "lgp",
    gender: null,
    group: "Разовые посещения",
    title: "Первое пробное посещение",
    price: 1000,
    image: "/images/Pricing/device.webp",
    description: "Пробная процедура LPG для знакомства с методикой",
    fullDescription: "Первое ознакомительное посещение LPG-массажа. Позволяет оценить эффективность процедуры и познакомиться с техникой.",
    duration: "25 минут",
    seoTitle: "Первое пробное посещение LPG | 1000 руб",
    seoDescription: "Пробная процедура LPG-массажа для знакомства с методикой. Современное оборудование, профессиональные специалисты. Запишитесь на пробный сеанс!"
  },

  lgp2: {
    id: "lgp2",
    slug: createSlug("разовое посещение 25мин lpg массаж"),
    category: "lgp",
    gender: null,
    group: "Разовые посещения",
    title: "Разовое посещение 25мин",
    price: 1200,
    image: "/images/Pricing/lgp1.webp",
    description: "Разовый сеанс LPG-массажа 25 минут",
    fullDescription: "Одиночная процедура LPG-массажа продолжительностью 25 минут. Идеально для поддержания тонуса кожи и коррекции фигуры.",
    duration: "25 минут",
    seoTitle: "Разовое посещение LPG 25 минут | 1200 руб",
    seoDescription: "Разовый сеанс LPG-массажа продолжительностью 25 минут. Аппаратная методика коррекции фигуры и улучшения состояния кожи."
  },

  lgp3: {
    id: "lgp3",
    slug: createSlug("разовое посещение 45мин lpg массаж"),
    category: "lgp",
    gender: null,
    group: "Разовые посещения",
    title: "Разовое посещение 45мин",
    price: 1400,
    image: "/images/Pricing/lgp2.webp",
    description: "Разовый сеанс LPG-массажа 45 минут",
    fullDescription: "Продолжительная процедура LPG-массажа 45 минут для более глубокой обработки. Эффективно для борьбы с целлюлитом и локальными жировыми отложениями.",
    duration: "45 минут",
    seoTitle: "Разовое посещение LPG 45 минут | 1400 руб",
    seoDescription: "Разовый сеанс LPG-массажа 45 минут для коррекции фигуры и борьбы с целлюлитом. Профессиональное оборудование, видимый результат."
  },

  lgp4: {
    id: "lgp4",
    slug: createSlug("костюм lpg массаж"),
    category: "lgp",
    gender: null,
    group: "Разовые посещения",
    title: "Костюм (можно приобрести самостоятельно)",
    price: 800,
    image: "/images/Pricing/lgp3.webp",
    description: "Специальный костюм для LPG-процедур",
    fullDescription: "Индивидуальный костюм для проведения LPG-процедур. Обеспечивает гигиеничность и эффективность процедуры.",
    seoTitle: "Костюм для LPG процедур | 800 руб",
    seoDescription: "Специальный костюм для проведения LPG-процедур. Индивидуальный размер, многоразовое использование, обеспечивает гигиеничность."
  },

  // LGP - АБОНЕМЕНТЫ
  lgp5: {
    id: "lgp5",
    slug: createSlug("10 сеансов по 25мин lpg массаж абонемент"),
    category: "lgp",
    gender: null,
    group: "Абонементы",
    title: "10 сеансов по 25мин",
    price: 10000,
    image: "/images/Pricing/lgp2.webp",
    description: "Абонемент на 10 сеансов LPG по 25 минут",
    fullDescription: "Выгодный пакет из 10 процедур LPG-массажа по 25 минут каждая. Оптимальный курс для достижения видимых результатов в коррекции фигуры.",
    seoTitle: "Абонемент 10 сеансов LPG по 25 минут | 10000 руб",
    seoDescription: "Выгодный абонемент на 10 сеансов LPG-массажа по 25 минут. Курсовая методика для эффективной коррекции фигуры и борьбы с целлюлитом."
  },

  lgp6: {
    id: "lgp6",
    slug: createSlug("10 сеансов 45мин lpg массаж абонемент"),
    category: "lgp",
    gender: null,
    group: "Абонементы",
    title: "10 сеансов 45мин",
    price: 12000,
    image: "/images/Pricing/lgp1.webp",
    description: "Абонемент на 10 сеансов LPG по 45 минут",
    fullDescription: "Премиальный пакет из 10 процедур LPG-массажа по 45 минут каждая. Интенсивный курс для максимальных результатов в улучшении контуров тела.",
    seoTitle: "Абонемент 10 сеансов LPG по 45 минут | 12000 руб",
    seoDescription: "Премиальный абонемент на 10 сеансов LPG-массажа по 45 минут. Интенсивный курс для коррекции фигуры, борьбы с целлюлитом и улучшения тонуса кожи."
  },

  lgp7: {
    id: "lgp7",
    slug: createSlug("костюм lpg массаж абонемент"),
    category: "lgp",
    gender: null,
    group: "Абонементы",
    title: "Костюм (можно приобрести самостоятельно)",
    price: 800,
    image: "/images/Pricing/lgp3.webp",
    description: "Специальный костюм для LPG-процедур",
    fullDescription: "Индивидуальный костюм для проведения LPG-процедур в рамках абонемента. Обеспечивает комфорт и гигиеничность.",
    seoTitle: "Костюм для LPG процедур (в абонементе) | 800 руб",
    seoDescription: "Специальный костюм для проведения LPG-процедур. Включен в стоимость абонемента, индивидуальный пошив, многоразовое использование."
  }
};

// Вспомогательные функции
export function getServiceBySlug(slug) {
  return Object.values(servicesData).find(service => service.slug === slug);
}

export function getServiceById(id) {
  return servicesData[id];
}

export function getAllServices() {
  return Object.values(servicesData);
}

export function getAllServiceSlugs() {
  return Object.values(servicesData).map(service => ({
    slug: service.slug
  }));
}

export function getServicesByCategory(category) {
  return Object.values(servicesData).filter(service => service.category === category);
}

export function getServicesByGender(gender) {
  return Object.values(servicesData).filter(service => service.gender === gender);
}

export function getRelatedServices(currentService, limit = 4) {
  return Object.values(servicesData)
    .filter(service => 
      service.id !== currentService.id && 
      (service.category === currentService.category || 
       service.gender === currentService.gender ||
       service.group === currentService.group)
    )
    .slice(0, limit);
}