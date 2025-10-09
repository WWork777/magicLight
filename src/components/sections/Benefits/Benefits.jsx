import styles from "./Benefits.module.scss";
import Image from "next/image";

export default function Benefits() {
  return (
    <section id="benefits" className={styles.benefits}>
      <div className="container">
        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={`${styles.card} ${styles.card1}`}>
            <div className={styles.left}>
              <Image
                src="/icons/Benefits/logo.svg"
                alt="Логотип"
                width={260}
                height={130}
                className="styles.logo"
              />
              <h3 className={styles.title}>
                Обеспечивает высокое качество и безопасность
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className={`${styles.card} ${styles.card2}`}>
            <Image
              src="/images/Benefits/Individual.webp"
              alt="Индивидуальный подход"
              fill
              className={styles.bgImage}
            />
            <div className={styles.overlay}></div>
            <div className={styles.textWhite}>
              <h3>Индивидуальный подход</h3>
              <p>
                Мы подбираем наиболее подходящий <br /> курс процедур, исходя{" "}
                <br /> из эффективности для клиента
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className={`${styles.card} ${styles.card3} ${styles.colored}`}>
            <p>
              Заметный <br /> результат после 1-ой <br /> процедуры
            </p>
            <div className={styles.icon}>
              <Image
                src="/icons/Benefits/leaf.svg"
                alt="Лист"
                width={24}
                height={24}
              />
            </div>
          </div>

          {/* Card 4 */}
          <div className={`${styles.card} ${styles.card4}`}>
            <div className={styles.up}>
              <h3>
                Безопасно <br /> и безболезненно
              </h3>
            </div>
          </div>

          {/* Card 5 */}
          <div className={`${styles.card} ${styles.card5}`}>
            <Image
              src="/images/Benefits/Equipment.webp"
              alt="Оборудование"
              fill
              className={styles.bgImage}
            />
            <div className={styles.up}>
              <h3>Хорошее оборудование</h3>
              <p className={styles.mobile}>
                Лазеры с регистрационным <br /> удостоверением, подтверждающим{" "}
                <br />
                безопасность и эффективность лазера
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className={`${styles.card} ${styles.card6}`}>
            <div className={styles.up}>
              <h3>
                Длительный
                <br /> эффект после курса <br />
                процедур
              </h3>
            </div>
          </div>

          {/* Card 7 */}
          <div className={`${styles.card} ${styles.card7} ${styles.colored}`}>
            <p>
              Доступные <br /> цены
            </p>
            <div className={styles.icon}>
              <Image
                src="/icons/Benefits/ruble.svg"
                alt="Рубль"
                width={24}
                height={24}
              />
            </div>
          </div>

          {/* Card 8 */}
          <div className={`${styles.card} ${styles.card8}`}>
            <div className={styles.text}>
              <h3>Система скидок</h3>
              <p>
                по карте каждому <br /> клиенту — 1, 4, 7, 10 посещения = 25%
              </p>
            </div>
            <div className={styles.icon}>
              <Image
                src="/icons/Benefits/saleIcon.svg"
                alt="Иконка скидки"
                width={200}
                height={200}
              />
            </div>
          </div>

          {/* Card 9 */}
          <div className={`${styles.card} ${styles.card9} ${styles.colored}`}>
            <div className={styles.text}>
              <h3>Работают профессионалы</h3>
              <p>
                Все наши специалисты на постоянной основе повышают свою
                квалификацию и сдают аттестационные экзамены
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
