/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import PhoneInput from 'react-phone-input-2';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import '../styles/index.scss';
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
import TakeNumber from '../components/TakeNumber';

export default () => {
    const [phone, setValue] = useState('+ 375 ()');
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Аренда контейнеров - Смецце</title>
            </Helmet>
            <Layout>
                <main className="custom-page">
                    <section className="info transportation">
                        <div className="wrapper">
                            <h1>
                                Подробная стоимость  аренды контейнеров
<br />
                                для физических лиц
                            </h1>
                            <div className="table-wrapper">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>
                                                Грузоподъёмность /
{' '}
                                                <br />
объём контейнера
</th>
                                            <th>
                                                Стоимость аренды контейнера
                                                за 5 дней (минимальный заказ)
                                            </th>
                                            <th>
                                                Тариф при выезде
                                                за МКАД
</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                10 т / 8 м
<sup>3</sup>
                                            </td>
                                            <td>
                                                230 руб.
</td>
                                            <td>
                                                2 руб. / км
</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                10 т / 12 м
<sup>3</sup>
                                            </td>
                                            <td>
                                                250 руб.
</td>
                                            <td>
                                                2 руб. / км
</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="table-details">
                                    <h4>Дополнительная информация:</h4>
                                    <p>
                                        Стоимость указана при аренде за 5 дней (минимальный срок аренды), за каждый
                                        последующий день аренды - дополнительная оплата 30 руб. за 1 день
                                    </p>
                                </div>
                            </div>
                            <div className="info-details">
                                <p>Для юридических лиц стоимость при безналичном расчете увеличивается на 10 - 20%</p>
                                <p>
                                    Коммерческие предложения просим высылать на электронную почту -
                  {' '}
                                    <span><a href="mailto:tv@smette.by">tv@smette.by</a></span>
                                </p>
                            </div>
                            <TakeNumber />
                        </div>
                    </section>
                    <section className="auto">
                        <h2>Автопарк</h2>
                        <div className="auto-wrapper w-100 flex-wrap">
                            <div className="card">
                                <h3>Mercedes 410 D</h3>
                                <img src={auto1} alt="Авто 1" />
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
                                <img src={auto2} alt="Авто 2" />
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
                                <img src={auto3} alt="Авто 3" />
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
                                <img src={auto4} alt="Авто 4" />
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
                                <img src={auto5} alt="Авто 5" />
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
                            <div className="gallery-wrapper d-flex flex-wrap">
                                <img className="col-4" src={gallery1} alt="Наша работа" />
                                <img className="col-4" src={gallery2} alt="Наша работа" />
                                <img className="col-4" src={gallery3} alt="Наша работа" />
                                <img className="col-4" src={gallery4} alt="Наша работа" />
                                <img className="col-4" src={gallery5} alt="Наша работа" />
                                <img className="col-4" src={gallery6} alt="Наша работа" />
                            </div>
                        </div>
                        <TakeNumber />
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