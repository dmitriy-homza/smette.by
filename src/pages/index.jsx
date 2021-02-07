import React from 'react';
import Layout from '../components/Layout';

export default () => (
  <>
    <Layout>
      <main>
        <section className="hello">
          <div className="wrapper">
            <div className="text-block">
              <h1>
                Вывоз мусора и перевозки
                по Минску и
                Минской области
              </h1>
              <img src="" alt="line" />
              <ul>
                <li>пунктуальность и индивидуальный подход</li>
                <li>опыт работы более 5 лет</li>
                <li>собственный автопарк и штат грузчиков</li>
                <li>низкие цены доступные для всех</li>
              </ul>
            </div>
            <img src="" alt="Car" />
          </div>
        </section>
        <section className="services">
          <h2>Услуги и стоимость</h2>
          <div className="service-cards-wrapper">Карта</div>
          <div className="take-number">
            <h2>Заказать звонок</h2>
            <div className="form">
              <input type="number" />
              <input type="submit" />
            </div>
          </div>
        </section>
        <section className="auto">
          <h2>Автопарк</h2>
          <div className="auto-wrapper">
            Авто карты
          </div>
          <div className="auto-details">
            <p>Для юридических лиц стоимость при безналичном расчете увеличивается на 10 - 20%</p>
            <p>
              Коммерческие предложения просим высылать на электронную почту -
              <span>tv@smette.by</span>
            </p>
          </div>
          <div className="take-number">
            <h2>Заказать звонок</h2>
            <div className="form">
              <input type="number" />
              <input type="submit" />
            </div>
          </div>
        </section>
        <section className="our-works">
          <div className="gallery">
            <h2>Наши работы</h2>
            Галлерея
          </div>
          <div className="take-number">
            <h2>Заказать звонок</h2>
            <div className="form">
              <input type="number" />
              <input type="submit" />
            </div>
          </div>
        </section>
        <section className="contacts">
          <div className="map" />
          <div className="contacts-details">
            <p>
              <span>Адрес:</span>
              г. Минск, Меньковский
              тракт, 23, стоянка грузовых
              автомобилей  B.S.A.T.
            </p>
            <p>
              <span>Телефоны:</span>
              <ul>
                <li>
                  +375445749949
                </li>
                <li>+375333549949</li>

              </ul>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  </>
);
