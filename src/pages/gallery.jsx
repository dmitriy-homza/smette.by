/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Carousel from 'nuka-carousel';
import Layout from '../components/Layout';
import '../styles/index.scss';
import 'react-phone-input-2/lib/style.css';
import gallery1 from '../images/gallery1.jpg';
import gallery2 from '../images/gallery2.jpg';
import gallery3 from '../images/gallery3.jpg';
import gallery4 from '../images/gallery4.jpg';
import gallery5 from '../images/gallery5.jpg';
import gallery6 from '../images/gallery6.jpg';
import TakeNumber from '../components/TakeNumber';

export default () => {
  const [phone, setValue] = useState('+ 375 ()');
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Наши работы - Smette</title>
      </Helmet>
      <Layout>
        <main className="custom-page nav-page">
          <section className="our-works">
            <div className="gallery">
              <h2>Наши работы</h2>
              <div className="gallery-wrapper desktop d-flex flex-wrap">
                <img className="col-12 col-md-4" src={gallery1} width="360" height="247" alt="Наша работа" />
                <img className="col-12 col-md-4" src={gallery2} width="360" height="247" alt="Наша работа" />
                <img className="col-12 col-md-4" src={gallery3} width="360" height="247" alt="Наша работа" />
                <img className="col-12 col-md-4" src={gallery4} width="360" height="247" alt="Наша работа" />
                <img className="col-12 col-md-4" src={gallery5} width="360" height="247" alt="Наша работа" />
                <img className="col-12 col-md-4" src={gallery6} width="360" height="247" alt="Наша работа" />
              </div>
              <div className="mobile sliderik">
                <Carousel
                  defaultControlsConfig={{
                    nextButtonText: '>',
                    prevButtonText: '<',
                    pagingDotsStyle: {
                      fill: 'white',
                    },
                  }}
                >
                  <img src={gallery2} alt="Наша работа" />
                  <img src={gallery1} alt="Наша работа" />
                  <img src={gallery3} alt="Наша работа" />
                  <img src={gallery4} alt="Наша работа" />
                  <img src={gallery5} alt="Наша работа" />
                  <img src={gallery6} alt="Наша работа" />
                </Carousel>
              </div>
              <TakeNumber />
            </div>
          </section>
          <section className="contacts w-100">
            <h2>Контакты</h2>
            <div className="contacts-wrapper d-flex justify-content-between">
              <div className="map">
                <div>
                  <iframe title="yandex-map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad2e65a68c9a0b506f96f0fcd1e95761deaef3bca2e07d59351e7cb85fcf7736e&amp;source=constructor" width="680" height="100%" frameBorder="0" />
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
