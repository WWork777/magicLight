import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section id='hero' className={styles.hero}>
      <div className='container'>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <h1 className={styles.title}>
            Удаление волос <br /> без боли в Кемерово
          </h1>
          <p className={styles.subtitle}>
            Скидка <span className={styles.percent}>25%</span> новичкам
          </p>
          <a
            href='https://wa.me/79039166251'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.button}
          >
            Записаться
          </a>
        </div>
      </div>
    </section>
  );
}
