/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import PhoneInput from 'react-phone-input-2';
import Layout from '../components/Layout';
import '../styles/index.scss';
import 'react-phone-input-2/lib/style.css';

export default () => {
  const [phone, setValue] = useState('+ 375 ()');
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Контакты - Смецце</title>
      </Helmet>
      <Layout>
        <main className="custom-page nav-page">
          <section className="contacts w-100">
            <h1>Контакты</h1>
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
