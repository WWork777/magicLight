import styles from './Studio.module.scss';
import Image from 'next/image';

export default function Studio() {
  return (
    <section className={styles.studio}>
      <div className='container'>
        <h2>Наша студия</h2>
        <div className={styles.grid}>
          <div className={`${styles.item} ${styles.studio1}`}>
            <Image src='/images/Studio/studio1.webp' alt='Студия' fill />
          </div>
          <div className={`${styles.item} ${styles.studio2}`}>
            <Image src='/images/Studio/studio2.webp' alt='Деталь' fill />
          </div>
          <div className={`${styles.item} ${styles.studio3}`}>
            <Image src='/images/Studio/studio3.webp' alt='Деталь' fill />
          </div>
          <div className={`${styles.item} ${styles.studio4}`}>
            <Image src='/images/Studio/studio4.webp' alt='Процедура' fill />
          </div>
        </div>
      </div>
    </section>
  );
}
