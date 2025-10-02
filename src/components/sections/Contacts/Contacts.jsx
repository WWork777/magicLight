'use client';
import styles from './Contacts.module.scss';

export default function Contacts() {
  return (
    <section id='contacts' className={styles.contacts}>
      <div className='container'>
        <h2 className={styles.title}>Контакты</h2>
        <div className={styles.wrapper}>
          {/* Левая часть */}
          <div className={styles.info}>
            <p>
              <strong>Адрес</strong>
              <br />
              г. Кемерово, пр. Шахтёров, 68А
            </p>
            <p>
              <strong>Телефон</strong>
              <br />
              <a href='tel:+79039166251'>+7 (903) 916-62-51</a>
            </p>
            <p>
              <strong>Соцсети</strong>
            </p>
            <div className={styles.socials}>
              <a
                href='https://wa.me/79039166251'
                target='_blank'
                rel='noopener noreferrer'
              ></a>
              <a
                href='https://vk.com'
                target='_blank'
                rel='noopener noreferrer'
              ></a>
              <a
                href='https://t.me'
                target='_blank'
                rel='noopener noreferrer'
              ></a>
            </div>
          </div>

          {/* Правая часть (карта) */}
          <div className={styles.map}>
            <iframe
              src='https://yandex.ru/map-widget/v1/?um=constructor%3A72c661d5b2b4f9e585c30607c0b2afbeefa2e4224bab82cb23b9447faa2475d8&amp;source=constructor'
              width='100%'
              height='100%'
              frameBorder='0'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
