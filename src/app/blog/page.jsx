import BlogGrid from '../blogCard/page';
import { headers } from 'next/headers';

export async function generateMetadata() {
  const headersList = headers();
  const host = (await headersList).get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const baseURL = `${protocol}://${host}`;
  const blogURL = `${baseURL}/blog`;

  return {
    title: 'Блог о лазерной эпиляции | Волшебный свет Кемерово',
    description:
      'Статьи о лазерной эпиляции, уходе за кожей и красоте. Советы от мастеров салона «Волшебный свет» Кемерово. Профессиональные рекомендации до и после процедуры.',
    keywords:
      'блог об эпиляции, статьи про лазерную эпиляцию, уход после эпиляции, удаление волос, эпиляция Кемерово, советы по эпиляции, Волшебный свет блог',
    alternates: {
      canonical: blogURL,
    },
    openGraph: {
      title: 'Блог о лазерной эпиляции | Волшебный свет Кемерово',
      description:
        'Полезные статьи и советы от профессиональных мастеров эпиляции. Все о лазерной эпиляции в одном блоге.',
      url: blogURL,
      siteName: 'Волшебный свет Кемерово',
      images: [
        {
          url: `${baseURL}/images/Hero/Hero.webp`,
          width: 1200,
          height: 630,
          alt: 'Блог Волшебный свет - статьи о лазерной эпиляции',
        },
      ],
      locale: 'ru_RU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Блог о лазерной эпиляции | Волшебный свет Кемерово',
      description:
        'Статьи и советы от профессиональных мастеров эпиляции. Волшебный свет блог.',
      images: [`${baseURL}/images/Hero/Hero.webp`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    authors: [{ name: 'Волшебный свет' }],
    creator: 'Волшебный свет Кемерово',
    publisher: 'Волшебный свет Кемерово',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}

export default function BlogPage() {
  return <BlogGrid />;
}
