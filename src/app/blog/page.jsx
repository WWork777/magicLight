// app/blog/page.js
import Link from "next/link";
import styles from "./blogCard.module.scss";
import blogData from "@/data/blogData.json";
import { headers } from "next/headers";

export async function generateMetadata({ searchParams }) {
  // Ждем searchParams, так как это промис
  const params = await searchParams;
  const headersList = headers();
  const host = (await headersList).get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const baseURL = `${protocol}://${host}`;
  const blogURL = `${baseURL}/blog`;

  // Добавляем номер страницы в заголовок
  const page = parseInt(params?.page || "1");
  const pageTitle = page > 1 ? `Блог - Страница ${page}` : "Блог";

  return {
    title: `${pageTitle} | Волшебный свет Кемерово`,
    description:
      "Статьи о лазерной эпиляции, уходе за кожей и красоте. Советы от мастеров салона «Волшебный свет» Кемерово. Профессиональные рекомендации до и после процедуры.",
    keywords:
      "блог об эпиляции, статьи про лазерную эпиляцию, уход после эпиляции, удаление волсов, эпиляция Кемерово, советы по эпиляции, Волшебный свет блог",

    alternates: {
      canonical: blogURL,
    },

    openGraph: {
      title: `${pageTitle} | Волшебный свет Кемерово`,
      description:
        "Полезные статьи и советы от профессиональных мастеров эпиляции. Все о лазерной эпиляции в одном блоге.",
      url: blogURL,
      siteName: "Волшебный свет Кемерово",
      images: [
        {
          url: `${baseURL}/images/Hero/Hero.webp`,
          width: 1200,
          height: 630,
          alt: "Блог Волшебный свет - статьи о лазерной эпиляции",
        },
      ],
      locale: "ru_RU",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${pageTitle} | Волшебный свет Кемерово`,
      description:
        "Статьи и советы от профессиональных мастеров эпиляции. Волшебный свет блог.",
      images: [`${baseURL}/images/Hero/Hero.webp`],
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

    authors: [{ name: "Волшебный свет" }],
    creator: "Волшебный свет Кемерово",
    publisher: "Волшебный свет Кемерово",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}

function BlogCard({
  title,
  description,
  category,
  date,
  readTime,
  imageUrl,
  slug,
}) {
  return (
    <Link href={`/blog/${slug}`} className={styles.blogCard}>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.category}>{category}</span>
          <span className={styles.date}>📅 {date}</span>
        </div>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{description}</p>

        <div className={styles.footer}>
          <div className={styles.author}>
            <div className={styles.avatar}></div>
            <span>Волшебный свет</span>
          </div>
          <span className={styles.readTime}>⏱️ {readTime}</span>
        </div>
      </div>
    </Link>
  );
}

function Pagination({ currentPage, totalPages, basePath = "/blog" }) {
  const pages = [];

  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  const getPageHref = (page) => {
    if (page === 1) return basePath;
    return `${basePath}?page=${page}`;
  };

  return (
    <div className={styles.pagination}>
      <Link
        href={currentPage > 1 ? getPageHref(currentPage - 1) : "#"}
        className={`${styles.paginationButton} ${
          currentPage === 1 ? styles.disabled : ""
        }`}
        aria-label="Предыдущая страница"
        scroll={true}
      >
        ← Назад
      </Link>

      <div className={styles.pageNumbers}>
        {startPage > 1 && (
          <>
            <Link
              href={getPageHref(1)}
              className={`${styles.pageButton} ${
                currentPage === 1 ? styles.active : ""
              }`}
              scroll={true}
            >
              1
            </Link>
            {startPage > 2 && <span className={styles.ellipsis}>...</span>}
          </>
        )}

        {pages.map((page) => (
          <Link
            key={page}
            href={getPageHref(page)}
            className={`${styles.pageButton} ${
              currentPage === page ? styles.active : ""
            }`}
            aria-label={`Страница ${page}`}
            aria-current={currentPage === page ? "page" : undefined}
            scroll={true}
          >
            {page}
          </Link>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <span className={styles.ellipsis}>...</span>
            )}
            <Link
              href={getPageHref(totalPages)}
              className={`${styles.pageButton} ${
                currentPage === totalPages ? styles.active : ""
              }`}
              scroll={true}
            >
              {totalPages}
            </Link>
          </>
        )}
      </div>

      <Link
        href={currentPage < totalPages ? getPageHref(currentPage + 1) : "#"}
        className={`${styles.paginationButton} ${
          currentPage === totalPages ? styles.disabled : ""
        }`}
        aria-label="Следующая страница"
        scroll={true}
      >
        Вперед →
      </Link>
    </div>
  );
}

export default async function BlogPage({ searchParams }) {
  const ITEMS_PER_PAGE = 8;

  // Ждем searchParams, так как это промис в Next.js 15
  const params = await searchParams;

  // Получаем текущую страницу из searchParams
  const page = parseInt(params?.page || "1");
  const currentPage = Math.max(1, page);

  const totalPages = Math.ceil(blogData.length / ITEMS_PER_PAGE);
  const validatedPage = Math.min(currentPage, totalPages);

  const startIndex = (validatedPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPosts = blogData.slice(startIndex, endIndex);

  if (!blogData || blogData.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.noArticles}>Нет статей для отображения</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.blog_title}>Наш блог</h1>

      {/* Отладочная информация */}

      <div className={styles.grid}>
        {currentPosts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={validatedPage}
          totalPages={totalPages}
          basePath="/blog"
        />
      )}
    </div>
  );
}
