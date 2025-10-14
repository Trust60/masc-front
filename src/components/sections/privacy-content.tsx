"use client";

import { motion } from "framer-motion";

export function PrivacyContent() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Політика конфіденційності
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ми цінуємо вашу конфіденційність та зобов&apos;язуємося захищати
              ваші персональні дані. Ця політика конфіденційності пояснює, як ми
              збираємо, використовуємо та захищаємо вашу інформацію.
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-muted/30 bg-texture-grid rounded-lg p-6 mb-8">
              <p className="text-muted-foreground">
                Ця політика конфіденційності (далі — «Політика») визначає
                порядок обробки та захисту персональних даних користувачів
                вебсайту https://masc-it.vercel.app, які надаються фізичною
                особою-підприємцем Ковальчук Ярославою Василівною (ЄДРПОУ:
                3451315569) (надалі — «Виконавець»).
              </p>
            </div>

            <div className="space-y-8">
              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  1. Збір персональних даних
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong>1.1.</strong> Виконавець може збирати наступну
                    інформацію від Користувача:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Ім&apos;я, прізвище, по батькові</li>
                    <li>Контактні дані (електронна пошта, номер телефону)</li>
                    <li>Дані про освіту та професійний досвід</li>
                    <li>
                      Інформацію про використання сервісів (історія навчання,
                      прогрес, результати тестів)
                    </li>
                    <li>
                      Технічні дані (IP-адреса, тип пристрою, операційна
                      система, тип браузера)
                    </li>
                  </ul>
                  <p>
                    <strong>1.2.</strong> Персональні дані збираються при:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Реєстрації та створенні облікового запису</li>
                    <li>Оформленні замовлення на послуги</li>
                    <li>Підписці на розсилку</li>
                    <li>Заповненні форм зворотного зв&apos;язку</li>
                    <li>Використанні сервісів та Telegram-ботів</li>
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  2. Мета обробки персональних даних
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong>2.1.</strong> Виконавець обробляє персональні дані
                    Користувача для:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Надання доступу до освітніх послуг</li>
                    <li>Виконання договірних зобов&apos;язань</li>
                    <li>Обробки платежів</li>
                    <li>Надсилання інформаційних повідомлень</li>
                    <li>Покращення якості послуг</li>
                    <li>Аналізу використання сервісів</li>
                    <li>Технічної підтримки</li>
                  </ul>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  3. Правові підстави обробки персональних даних
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong>3.1.</strong> Обробка персональних даних
                    здійснюється на підставі:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Згоди Користувача</li>
                    <li>Виконання договору з Користувачем</li>
                    <li>Законних інтересів Виконавця</li>
                    <li>Виконання юридичних зобов&apos;язань</li>
                  </ul>
                  <p>
                    <strong>3.2.</strong> Надаючи свої персональні дані,
                    Користувач погоджується з цією Політикою та надає згоду на
                    обробку своїх персональних даних відповідно до Закону
                    України &laquo;Про захист персональних даних&raquo;.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  4. Термін зберігання персональних даних
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong>4.1.</strong> Персональні дані зберігаються протягом
                    строку, необхідного для досягнення мети їх обробки, або до
                    моменту відкликання згоди Користувачем.
                  </p>
                  <p>
                    <strong>4.2.</strong> Після досягнення мети обробки або
                    відкликання згоди персональні дані видаляються або
                    анонімізуються, якщо інше не передбачено законодавством.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  5. Захист персональних даних
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong>5.1.</strong> Виконавець вживає необхідних технічних
                    та організаційних заходів для захисту персональних даних від
                    несанкціонованого доступу, зміни, розкриття або знищення.
                  </p>
                  <p>
                    <strong>5.2.</strong> Доступ до персональних даних мають
                    лише уповноважені особи, які потребують їх для виконання
                    своїх обов&apos;язків.
                  </p>
                  <p>
                    <strong>5.3.</strong> Передача персональних даних третім
                    особам здійснюється лише за наявності згоди Користувача або
                    у випадках, передбачених законодавством.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  6. Права Користувача
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong>6.1.</strong> Користувач має право:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                      Отримувати інформацію про обробку своїх персональних даних
                    </li>
                    <li>
                      Вимагати виправлення неточних або неповних персональних
                      даних
                    </li>
                    <li>Вимагати видалення своїх персональних даних</li>
                    <li>Відкликати свою згоду на обробку персональних даних</li>
                    <li>Заперечувати проти обробки своїх персональних даних</li>
                  </ul>
                  <p>
                    <strong>6.2.</strong> Для реалізації своїх прав Користувач
                    може звернутися до Виконавця за адресою електронної пошти:{" "}
                    <a
                      href="mailto:masc.edu.it@gmail.com"
                      className="text-gradient-orange hover:underline"
                    >
                      masc.edu.it@gmail.com
                    </a>
                    .
                  </p>
                  <p>
                    <strong>6.3.</strong> Виконавець розглядає звернення
                    Користувача та надає відповідь протягом 30 (тридцяти)
                    календарних днів з моменту отримання звернення.
                  </p>
                  <p>
                    <strong>6.4.</strong> Після отримання звернення обробка
                    даних припиняється протягом 5 (п&apos;яти) робочих днів,
                    якщо це не суперечить чинному законодавству та не
                    перешкоджає виконанню зобов&apos;язань між сторонами.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  7. Обробка через сторонні сервіси
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong>7.1.</strong> Персональні дані можуть оброблятися із
                    використанням хмарних та програмних сервісів третіх сторін,
                    зокрема: платіжних систем, платформ онлайн-навчання,
                    Telegram-ботів, систем розсилок, аналітики та підтримки
                    клієнтів, якщо це необхідно для надання послуг або
                    покращення їх якості.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  8. Використання файлів cookie
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong>8.1.</strong> Вебсайт використовує файли cookie для
                    збору інформації про відвідування та використання сайту.
                  </p>
                  <p>
                    <strong>8.2.</strong> Користувач може відключити
                    використання файлів cookie в налаштуваннях свого браузера,
                    проте це може обмежити функціональність сайту.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  9. Зміни до Політики конфіденційності
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong>9.1.</strong> Виконавець має право вносити зміни до
                    цієї Політики без попереднього повідомлення Користувача.
                  </p>
                  <p>
                    <strong>9.2.</strong> Нова редакція Політики набуває
                    чинності з моменту її розміщення на вебсайті, якщо інше не
                    передбачено новою редакцією Політики.
                  </p>
                  <p>
                    <strong>9.3.</strong> Користувачам рекомендується періодично
                    переглядати цю Політику для ознайомлення з можливими
                    змінами.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Останнє оновлення:{" "}
                  {new Date().toLocaleDateString("uk-UA", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  року
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
