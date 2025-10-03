'use client';
import styles from './Contacts.module.scss';

export default function Contacts() {
  return (
    <section id='contacts' className={styles.contacts}>
      <div className='container'>
        <h2 className={styles.title}>Контакты</h2>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            {/* Адрес */}
            <div className={styles.label}>Адрес</div>
            <div className={styles.value}>г. Кемерово, пр. Шахтёров, 68А</div>

            {/* Телефон */}
            <div className={styles.label}>Телефон</div>
            <div className={styles.value}>
              <a href='tel:+79039166251'>+7 (903) 916-62-51</a>
            </div>

            {/* Соцсети */}
            <div className={styles.label}>Соцсети</div>
            <div className={`${styles.value} ${styles.socials}`}>
              <a href='https://wa.me/79039166251' target='_blank'>
                <img src='/icons/Contacts/whatsapp.svg' alt='WhatsApp' />
              </a>
              <a href='https://vk.com/laser_vs42_kem' target='_blank'>
                <img src='/icons/Contacts/vk.svg' alt='VK' />
              </a>
              <a href='https://t.me/VSVET25' target='_blank'>
                <img src='/icons/Contacts/telegram.svg' alt='Telegram' />
              </a>
            </div>
          </div>

          <div className={styles.map}>
            <iframe
              src='https://yandex.ru/map-widget/v1/?um=constructor%3A72c661d5b2b4f9e585c30607c0b2afbeefa2e4224bab82cb23b9447faa2475d8&amp;source=constructor'
              frameBorder='0'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
