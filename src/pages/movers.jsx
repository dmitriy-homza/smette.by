/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
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
            <Layout>
                <main>
                    <section className="info">
                        <div className="wrapper">
                            <h2>
                                Подробная стоимость услуг грузчиков
                                для физических лиц
                            </h2>
                            <div className="table-wrapper">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>
                                                Вес / объём
                                                мусора
</th>
                                            <th>
                                                Количество мешков мусора
                                                весом не более 30-35 кг
</th>
                                            <th colSpan="2">
                                                Стоимость услуг грузчиков при
                                                погрузочно-разгрузочных работах
</th>
                                        </tr>
                                        <tr>
                                            <th />
                                            <th />
                                            <th>с 1-м грузчиком</th>
                                            <th>с 2-мя грузчиками</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>500 кг / 1 м3</td>
                                            <td>10-15 мешков</td>
                                            <td>15 руб.</td>
                                            <td>30 руб.</td>
                                        </tr>
                                        <tr>
                                            <td> 1 т / 5 м3</td>
                                            <td>25-30 мешков</td>
                                            <td>25 руб.</td>
                                            <td>30 руб.</td>
                                        </tr>
                                        <tr>
                                            <td>2 т / 10 м3</td>
                                            <td>50-60 мешков</td>
                                            <td>40 руб.</td>
                                            <td>60 руб.</td>
                                        </tr>
                                        <tr>
                                            <td>3 т / 15 м3</td>
                                            <td>70-80 мешков</td>
                                            <td />
                                            <td>80 руб.</td>
                                        </tr>
                                        <tr>
                                            <td>4 т / 20 м3</td>
                                            <td>90-100 мешков</td>
                                            <td />
                                            <td>110 руб.</td>
                                        </tr>
                                        <tr>
                                            <td>5 т / 32 м3</td>
                                            <td>100-150 мешков</td>
                                            <td />
                                            <td>120 руб.</td>
                                        </tr>
                                        <tr>
                                            <td>10 т / 8 м3</td>
                                            <td>150-160 мешков</td>
                                            <td />
                                            <td>130 руб.</td>
                                        </tr>
                                        <tr>
                                            <td>10 т / 12 м3</td>
                                            <td>180-200 мешков</td>
                                            <td />
                                            <td>160 руб.</td>
                                        </tr>
                                        <tr>
                                            <td>10 т / 14 м3</td>
                                            <td>200-250 мешков</td>
                                            <td />
                                            <td>160 руб.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

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
                                    <a tag={Link} to="/movers">Подробная стоимость</a>
                                </div>
                            </div>
                        </div>
                        <div className="take-number">
                            <h2>Заказать обратный звонок</h2>
                            <div className="form">
                                <div className="react-tel-input">
                                    <input type="text" className="form-control" value="+ 375 (__) ___-__-__" />
                                </div>
                                <input className="submit-button" type="submit" value="Перезвоните мне" />
                            </div>
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
                                    <li>Объём до 18 м3</li>
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
                                    <li>Объём до 32 м3</li>
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
                                    <li>Объём до 8 / 12 / 14 м3</li>
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
                                    <li>Объём до 12 / 16 м3</li>
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
                                    <li>Объём до 8 / 12 м3</li>
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
                        <div className="take-number">
                            <h2>Заказать обратный звонок</h2>
                            <div className="form">
                                <div className="react-tel-input">
                                    <input type="text" className="form-control" value="+ 375 (__) ___-__-__" />
                                </div>
                                <input className="submit-button" type="submit" value="Перезвоните мне" />
                            </div>
                        </div>
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
                        <div className="take-number">
                            <h2>Заказать обратный звонок</h2>
                            <div className="form">
                                <div className="react-tel-input">
                                    <input type="text" className="form-control" value="+ 375 (__) ___-__-__" />
                                </div>
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
