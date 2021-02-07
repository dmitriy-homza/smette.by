/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import Layout from '../components/Layout';
import '../styles/index.scss';
import carImg from '../images/car.png';
import line from '../images/line.png';
import 'react-phone-input-2/lib/style.css';

export default () => {
  const [phone, setValue] = useState('');
  return (
    <>
      <Layout>
        <main>
          <section className="hello">
            <div className="wrapper">
              <div className="text-block">
                <h1>
                  <span>Вывоз мусора</span>
                  {' '}
                  и перевозки
                  <br />
                  по Минску и
                  <br />
                  Минской области
                </h1>
                <img className="line" src={line} alt="line" />
                <ul>
                  <li>пунктуальность и индивидуальный подход</li>
                  <li>опыт работы более 5 лет</li>
                  <li>собственный автопарк и штат грузчиков</li>
                  <li>низкие цены доступные для всех</li>
                </ul>
              </div>
              <img className="car-img" src={carImg} alt="Car" />
            </div>
          </section>
          <section className="services">
            <h2>Услуги и стоимость</h2>
            <div className="service-cards-wrapper d-flex flex-wrap">
              <div className="service-card col-4">
                <h3>Вывоз мусора</h3>
                <div className="card-img img1">
                  <a href="/">Подробная стоимость</a>
                </div>
              </div>
              <div className="service-card col-4">
                <h3>Аренда контейнеров</h3>
                <div className="card-img img2">
                  <a href="/">Подробная стоимость</a>
                </div>
              </div>
              <div className="service-card col-4">
                <h3>Уборка и вывоз снега</h3>
                <div className="card-img img3">
                  <a href="/">Подробная стоимость</a>
                </div>
              </div>
              <div className="service-card col-4">
                <h3>Грузоперевозки</h3>
                <div className="card-img img4">
                  <a href="/">Подробная стоимость</a>
                </div>
              </div>
              <div className="service-card col-4">
                <h3>Продажа контейнеров ТБО</h3>
                <div className="card-img img5">
                  <a href="/">Подробная стоимость</a>
                </div>
              </div>
              <div className="service-card col-4">
                <h3>Услуги грузчиков</h3>
                <div className="card-img img6">
                  <a href="/">Подробная стоимость</a>
                </div>
              </div>
            </div>
            <div className="take-number">
              <h2>Заказать звонок</h2>
              <div className="form">
                <PhoneInput
                  disableSearchIcon
                  className="number-input"
                  disableDropdown
                  country="by"
                  value={phone}
                />
                <input className="submit-button" type="submit" value="Перезвоните мне" />
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
};
