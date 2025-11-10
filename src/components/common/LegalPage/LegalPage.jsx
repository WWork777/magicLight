'use client';

import styles from './LegalPage.module.scss';

export default function LegalPage({ title, subtitle, updatedAt, children }) {
  return (
    <section className={styles.section}>
      <div className='container'>
        <div className={styles.card}>
          <header className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            {updatedAt && (
              <p className={styles.updated}>
                Последнее обновление:{' '}
                <time dateTime={updatedAt}>{updatedAt}</time>
              </p>
            )}
          </header>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </section>
  );
}
