/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Spinner } from 'reactstrap';
import Carousel from 'nuka-carousel';
import firebase from 'gatsby-plugin-firebase';
import Layout from '../components/Layout';
import Cols4 from '../components/cols4';
import 'firebase/database';
import '../styles/index.scss';
import 'react-phone-input-2/lib/style.css';
import auto1 from '../images/auto1.webp';
import auto2 from '../images/auto2.webp';
import auto3 from '../images/auto3.webp';
import auto4 from '../images/auto4.webp';
import auto5 from '../images/auto5.webp';
import gallery1 from '../images/gallery1.webp';
import gallery2 from '../images/gallery2.webp';
import gallery3 from '../images/gallery3.webp';
import gallery4 from '../images/gallery4.webp';
import gallery5 from '../images/gallery5.webp';
import gallery6 from '../images/gallery6.webp';
import container1 from '../images/container1.png';
import container2 from '../images/container2.png';
import container3 from '../images/container3.png';
import container4 from '../images/container4.png';
import container5 from '../images/container5.png';
import TakeNumber from '../components/TakeNumber';

export default () => {
    const [phone, setValue] = useState('+ 375 ()');
    const [data, setData] = useState('');
    const fetchDataDefault = async () => {
        const result = await firebase.database().ref('containers').once('value').then((snapshot) => snapshot.val());
        setData(result);
      };
      useEffect(() => {
        fetchDataDefault();
      }, []);
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Контейнеры для ТБО - Smette</title>
            </Helmet>
            <Layout>
                <main className="custom-page nav-page">
                    <section className="auto containers info">
                        <h1>Контейнеры для ТБО</h1>
                        {data ? (
<div className="auto-wrapper w-100 flex-wrap">
                            <div className="card">
                                <h3>Контейнер 120 л</h3>
                                <img src={container1} alt="Авто 1" />
                                <ul>
                                    <li>
                                            Стоимость -
                                            {' '}
{data[1]}
{' '}
руб.
</li>
                                    <li>
                                        Грузоподъёмность до 48 кг
                                    </li>
                                    <li>
                                        Размеры  - 555*480*937 мм
                                    </li>
                                    <li>
                                        Вес - 8 кг
                                    </li>
                                    <li>Производство - Россия</li>
                                </ul>
                            </div>
                            <div className="card">
                                <h3>Контейнер 240 л</h3>
                                <img src={container2} alt="Авто 2" />
                                <ul>
                                    <li>
Стоимость -
{' '}
{data[2]}
{' '}
руб.
</li>
                                    <li>
                                        Грузоподъёмность до 96 кг
                                    </li>
                                    <li>
                                        Размеры  - 580*730*1060 мм
                                    </li>
                                    <li>
                                        Вес - 13,2 кг
                                    </li>
                                    <li>Производство - Россия</li>
                                </ul>
                            </div>
                            <div className="card">
                                <h3>Контейнер 360 л</h3>
                                <img src={container3} alt="Авто 3" />
                                <ul>
                                    <li>
Стоимость -
{' '}
{data[3]}
{' '}
руб.
</li>
                                    <li>
                                        Грузоподъёмность до 170 кг
                                    </li>
                                    <li>
                                        Размеры  - 575*575*1020 мм
                                    </li>
                                    <li>
                                        Вес - 16,2 кг
                                    </li>
                                    <li>Производство - Россия</li>
                                </ul>
                            </div>
                            <div className="card">
                                <h3>Контейнер 660 л</h3>
                                <img src={container4} alt="Авто 4" />
                                <ul>
                                    <li>
Стоимость -
{' '}
{data[4]}
{' '}
руб.
</li>
                                    <li>
                                        Грузоподъёмность до 510 кг
                                    </li>
                                    <li>
                                        Размеры  - 780*1370*1218 мм
                                    </li>
                                    <li>
                                        Вес - 42,6 кг
                                    </li>
                                    <li>Производство - Россия</li>
                                </ul>
                            </div>
                            <div className="card">
                                <h3>Контейнер 1100 л</h3>
                                <img src={container5} alt="Авто 5" />
                                <ul>
                                    <li>
Стоимость -
{' '}
{data[5]}
{' '}
руб.
</li>
                                    <li>
                                        Грузоподъёмность до 510 кг
                                    </li>
                                    <li>
                                        Размеры  - 1377*1077*1369 мм
                    </li>
                                    <li>Вес - 51 кг</li>
                                    <li>Производство - Россия</li>
                                </ul>
                            </div>
                            <div className="card additionals">
                                <h3>Дополнительная информация</h3>
                                <ul>
                                    <li>Продажа контейнеров для ТБО физическим и юридическим лицам осуществляется по предоплате в размере минимум 20% от стоимости заказа</li>
                                    <li>Возможна бесплатная аренда контейнера при условии заключения договора на вывоз мусора</li>
                                    <li>Возможны различные цвета контейнеров</li>
                                </ul>
                            </div>
                        </div>
) : <Spinner />}
                        <TakeNumber />
                    </section>
                    <section className="auto">
                        <h2>Автопарк</h2>
                        <div className="auto-wrapper w-100 flex-wrap">
                            <div className="card">
                                <h3>Mercedes 410 D</h3>
                                <img src={auto1} width="316" height="193" alt="Авто 1" />
                                <ul>
                                    <li>Грузоподъёмность до 3 т</li>
                                    <li>
                                        Объём до 18 м
<sup>3</sup>
                                    </li>
                                    <li>
                                        Стоимость - 170 руб.
                                    </li>
                                    <li>
                                        Услуги грузчика от 20 руб.
                                    </li>
                                    <li>При выезде за МКАД - 1,5 руб./км</li>
                                </ul>
                            </div>
                            <div className="card">
                                <h3>МАЗ 4370 «Зубрёнок»</h3>
                                <img src={auto2} width="316" height="193" alt="Авто 2" />
                                <ul>
                                    <li>Грузоподъёмность до 5 т</li>
                                    <li>
                                        Объём до 32 м
<sup>3</sup>
                                    </li>
                                    <li>
                                        Стоимость - 230 руб.
                                    </li>
                                    <li>
                                        Услуги грузчика от 30 руб.
                                    </li>
                                    <li>При выезде за МКАД - 1,5 руб./км</li>
                                </ul>
                            </div>
                            <div className="card">
                                <h3>Самосвал МАЗ 5551</h3>
                                <img src={auto3} width="316" height="193" alt="Авто 3" />
                                <ul>
                                    <li>Грузоподъёмность до 10 т</li>
                                    <li>
                                        Объём до 8 / 12 / 14 м
<sup>3</sup>
                                    </li>
                                    <li>
                                        Стоимость - 180 / 200 / 220 руб.
                                    </li>
                                    <li>
                                        Услуги грузчика от 35 руб.
                                    </li>
                                    <li>При выезде за МКАД - 2 руб./км</li>
                                </ul>
                            </div>
                            <div className="card">
                                <h3>Самосвал МАЗ 6501</h3>
                                <img src={auto4} width="316" height="193" alt="Авто 4" />
                                <ul>
                                    <li>Грузоподъёмность до 20 т</li>
                                    <li>
                                        Объём до 12 / 16 м
<sup>3</sup>
                                    </li>
                                    <li>
                                        Стоимость - 250 / 350 руб.
                                    </li>
                                    <li>
                                        Услуги грузчика от 40 руб.
                                    </li>
                                    <li>При выезде за МКАД - 2 руб./км</li>

                                </ul>
                            </div>
                            <div className="card">
                                <h3>Контейнеры в аренду</h3>
                                <img src={auto5} width="316" height="193" alt="Авто 5" />
                                <ul>
                                    <li>Грузоподъёмность до 10 т</li>
                                    <li>
                                        Объём до 8 / 12 м
<sup>3</sup>
                                    </li>
                                    <li>
                                        Стоимость - 230/250 руб. за 5 дней,
                                        при аренде свыше 5 дней
                                        дополнительно +30 руб./ день
                    </li>
                                    <li>При выезде за МКАД - 2 руб./км</li>
                                </ul>
                            </div>
                            <div className="card additionals">
                                <h3>Дополнительная информация</h3>
                                <ul>
                                    <li>Время загрузки до 2-х часов</li>
                                    <li>Дополнительное время загрузки:</li>
                                    <li>Транспорт 30-60 руб./ час</li>
                                    <li>
                                        Услуги грузчика 8 - 40 руб./ час
                                        (в зависимости от сложности и
                                        характера выполняемых работ)
                    </li>
                                    <li>Сбор мусора - 1 руб. за 1 мешок </li>
                                    <li>
                                        Стоимость мешка для
                                        строительного мусора - 1,5 руб.
                    </li>
                                    <li>
                                        Стоимость  б/у мешка для
                                        строительного мусора - 50 коп.
                    </li>
                                    <li>
                                        Спуск 1 мешка весом не более
                                        35 кг с этажа без лифта - 1,5 руб.
                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="auto-details">
                            <p>Для юридических лиц стоимость при безналичном расчете увеличивается на 10 - 20%</p>
                            <p>
                                Коммерческие предложения просим высылать на электронную почту -
                  {' '}
                                <span><a href="mailto:tv@smette.by">tv@smette.by</a></span>
                            </p>
                        </div>
                        <TakeNumber />
                    </section>
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
                    nextButtonText: '➞',
                    prevButtonText: '🠔',
                    pagingDotsStyle: {
                      fill: 'white',
                    },
                  }}
                >
                  <img src={gallery1} alt="Наша работа" />
                  <img src={gallery2} alt="Наша работа" />
                  <img src={gallery3} alt="Наша работа" />
                  <img src={gallery4} alt="Наша работа" />
                  <img src={gallery5} alt="Наша работа" />
                  <img src={gallery6} alt="Наша работа" />
                </Carousel>
              </div>
            </div>
                        <TakeNumber />
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
