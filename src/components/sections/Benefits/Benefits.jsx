import styles from './Benefits.module.scss';
import Image from 'next/image';

export default function Benefits() {
  return (
    <section id='benefits' className={styles.benefits}>
      <div className='container'>
        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={`${styles.card} ${styles.card1}`}>
            <div className={styles.left}>
              <Image
                src='/icons/Benefits/logo.svg' // логотип студии
                alt='Логотип'
                width={600}
                height={170}
                // className={styles.logo}
              />
              <h3 className={styles.title}>
                Обеспечивает высокое качество и безопасность
              </h3>
            </div>
            <div className={styles.right}>
              <Image
                src='/images/Benefits/Quality.webp' // фото (как на референсе)
                alt='Эпиляция'
                width={600}
                height={120}
                // fill
                // className={styles.cover}
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className={`${styles.card} ${styles.card2}`}>
            <Image
              src='/images/Benefits/Individual.webp'
              alt='Индивидуальный подход'
              fill
              className={styles.bgImage}
            />
            <div className={styles.overlay}></div>
            <div className={styles.textWhite}>
              <h3>Индивидуальный подход</h3>
              <p>
                Мы подбираем наиболее подходящий курс процедур, исходя из
                эффективности для клиента
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className={`${styles.card} ${styles.card3} ${styles.colored}`}>
            <p>Заметный результат после 1-й процедуры</p>
            <div className={styles.icon}>
              <Image
                src='/icons/Benefits/leaf.svg'
                alt='Лист'
                width={24}
                height={24}
              />
            </div>
          </div>

          {/* Card 4 */}
          <div className={`${styles.card} ${styles.card4}`}>
            <h4>Безопасно и безболезненно</h4>
            <div className={styles.image}>
              <Image
                src='/images/Benefits/Safety.webp'
                alt='Безопасность'
                width={200}
                height={140}
              />
            </div>
          </div>

          {/* Card 5 */}
          <div className={`${styles.card} ${styles.card5}`}>
            <Image
              src='/images/Benefits/Equipment.webp'
              alt='Оборудование'
              fill
              className={styles.bgImage}
            />
            <div className={styles.overlay}></div>
            <div className={styles.text}>
              <h4>Хорошее оборудование</h4>
              <p>
                Лазеры с регистрационным удостоверением, подтверждающим
                безопасность и эффективность
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className={`${styles.card} ${styles.card6}`}>
            <h4>Длительный эффект после курса процедур</h4>
            <div className={styles.image}>
              <Image
                src='/images/Benefits/Effect.webp'
                alt='Девушка'
                width={200}
                height={160}
              />
            </div>
          </div>

          {/* Card 7 */}
          <div className={`${styles.card} ${styles.card7} ${styles.colored}`}>
            <p>Доступные цены</p>
            <div className={styles.icon}>
              <Image
                src='/icons/Benefits/ruble.svg'
                alt='Рубль'
                width={24}
                height={24}
              />
            </div>
          </div>

          {/* Card 8 */}
          <div className={`${styles.card} ${styles.card8}`}>
            <div className={styles.text}>
              <h4>Система скидок</h4>
              <p>по карте каждому клиенту — 1, 4, 7, 10 посещения = 25%</p>
            </div>
            <div className={styles.icon}>
              <Image
                src='/icons/Benefits/saleIcon.svg'
                alt='Иконка скидки'
                width={40}
                height={40}
              />
            </div>
          </div>

          {/* Card 9 */}
          <div className={`${styles.card} ${styles.card9} ${styles.colored}`}>
            <div className={styles.text}>
              <h3>Работают профессионалы</h3>
              <p>
                Все наши специалисты на постоянной основе повышают квалификацию
                и сдают экзамены
              </p>
            </div>
            <div className={styles.image}>
              <Image
                src='/images/Benefits/Professional.webp'
                alt='Специалист'
                width={120}
                height={120}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
