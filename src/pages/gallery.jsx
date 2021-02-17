/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import PhoneInput from 'react-phone-input-2';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import '../styles/index.scss';
import carImg from '../images/car.png';
import line from '../images/line.png';
import 'react-phone-input-2/lib/style.css';
import auto1 from '../images/auto1.png';
import auto2 from '../images/auto2.png';
import auto3 from '../images/auto3.png';
import auto4 from '../images/auto4.png';
import auto5 from '../images/auto5.png';
import gallery1 from '../images/gallery1.png';
import gallery2 from '../images/gallery2.png';
import gallery3 from '../images/gallery3.png';
import gallery4 from '../images/gallery4.png';
import gallery5 from '../images/gallery5.png';
import gallery6 from '../images/gallery6.png';

export default () => {
  const [phone, setValue] = useState('+ 375 ()');
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Наши работы - Смецце</title>
      </Helmet>
      <Layout>
        <main className="custom-page nav-page">
          <section className="our-works">
            <div className="gallery">
              <h1>Наши работы</h1>
              <div className="gallery-wrapper d-flex flex-wrap">
                <img className="col-4" src={gallery1} alt="Наша работа" />
                <img className="col-4" src={gallery2} alt="Наша работа" />
                <img className="col-4" src={gallery3} alt="Наша работа" />
                <img className="col-4" src={gallery4} alt="Наша работа" />
                <img className="col-4" src={gallery5} alt="Наша работа" />
                <img className="col-4" src={gallery6} alt="Наша работа" />
              </div>
            </div>
            <div className="take-number">
              <h2>Заказать обратный звонок</h2>
              <div className="form">
                <div className="react-tel-input">
                  <input type="text" className="form-control" value="+ 375 (__) ___-__-__" />
                </div>
                {/* <PhoneInput
                  disableSearchIcon
                  className="number-input"
                  disableDropdown
                  country="by"
                  value={phone}
                /> */}
                <input className="submit-button" type="submit" value="Перезвоните мне" />
              </div>
            </div>
          </section>
          <section className="contacts w-100">
            <h2>Контакты</h2>
            <div className="contacts-wrapper d-flex justify-content-between">
              <div className="map">
                <div>
                  <iframe src="https://yandex.by/map-widget/v1/-/CCUMJORE0D" width="680" height="100%" frameBorder="1" allowFullScreen="true" />
                </div>
              </div>
              <div className="contacts-details">
                <div className="wrapper">
                  <p>
                    <span>
                      Адрес:
                      {' '}
                    </span>
                    г. Минск, Меньковский
                    тракт, 23, стоянка грузовых
                    автомобилей  B.S.A.T.
                  </p>
                  <p className="d-flex">
                    <span>Телефоны:</span>
                    <ul>
                      <li>
                        <a href="tel:+375445749949">+375445749949</a>
                      </li>
                      <li><a href="tel:+375333549949">+375333549949</a></li>
                    </ul>
                  </p>
                  <p className="underlined">
                    <span>
                      Электронная почта:
                      {' '}
                    </span>
                    <a href="mailto:tv@smette.by">tv@smette.by</a>
                  </p>
                  <p>
                    <span>
                      Образцы документов для юридических лиц:
                      {' '}
                    </span>
                    <ul>
                      <li>
                        - копия свидетельства о
                        государственной регистрации
                      </li>
                      <li>
                        - договор на оказание
                        транспортно-экспедиционных
                        услуг

                      </li>
                      <li>
                        - договор на выполнение
                        погрузочно-разрузочных работ
                      </li>

                    </ul>
                  </p>
                </div>

              </div>
            </div>

          </section>
        </main>
      </Layout>
    </>
  );
};
