/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Spinner } from 'reactstrap';
import '../styles/index.scss';
import firebase from 'gatsby-plugin-firebase';
import 'firebase/database';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import classnames from 'classnames';
import Layout from '../components/Layout';
import Cols4 from '../components/cols4';

require('firebase/auth');

export default () => {
  const [uiConfig, setUIConfig] = useState(null);
  const [hasAccount, setAccount] = useState(false);
  const [currentUser, setUI] = useState(false);
  const [data, setData] = useState('');
  const [group, setGroup] = useState('trash');
  const [activeTab, setActiveTab] = useState('1');

  const fetchDataDefault = async (group) => {
    setGroup(group);
    const result = await firebase.database().ref(`${group}`).once('value').then((snapshot) => snapshot.val());
    setData(result);
  };

  const writeNewAdditions = async (group) => {
    firebase.database().ref(`${group}`).set(data);
  };

  useEffect(() => {
    setUIConfig({
      // Popup signin flow rather than redirect flow.
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAccount(true);
        setUI(firebase.auth().currentUser.uid);
      } else {
        setAccount(false);
      }
    });
    fetchDataDefault(group);
  }, []);
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  if (!uiConfig) {
    return <p>Loading...</p>;
  }

  function handleChange(event, i) {
    data[i] = event.target.value;
  }

  return (
    <div className="admin">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Администрирование - Smette</title>
      </Helmet>
      <Layout>
        {
                  // eslint-disable-next-line no-nested-ternary
                  hasAccount ? (
                    currentUser === 'XlLnQDkLccVEDsr6w9ifdCWjCQo1'
                      ? (
                        <div className="signed-In">
                          <div className="d-flex admin-controls">
                            {' '}
                            <p>
                              Добро пожаловать, Валерий!
                            </p>
                            <Button onClick={() => firebase.auth().signOut()}>Выйти</Button>
                          </div>
                          <div className="content">
                            <Nav tabs>
                              <NavItem>
                                <NavLink
                                  className={classnames({ active: activeTab === '1' })}
                                  onClick={() => {
                                    fetchDataDefault('trash');
                                    toggle('1');
                                  }}
                                >
                                  Вывоз мусора
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  className={classnames({ active: activeTab === '2' })}
                                  onClick={() => {
                                    fetchDataDefault('rent');
                                    toggle('2');
                                  }}
                                >
                                  Аренда контейнеров
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  className={classnames({ active: activeTab === '3' })}
                                  onClick={() => {
                                    fetchDataDefault('transportation');
                                    toggle('3');
                                  }}
                                >
                                  Грузоперевозки
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  className={classnames({ active: activeTab === '4' })}
                                  onClick={() => {
                                    fetchDataDefault('movers');
                                    toggle('4');
                                  }}
                                >
                                  Услуги грузчиков
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  className={classnames({ active: activeTab === '5' })}
                                  onClick={() => {
                                    fetchDataDefault('containers');
                                    toggle('5');
                                  }}
                                >
                                  Продажа контейнеров ТБО
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  className={classnames({ active: activeTab === '6' })}
                                  onClick={() => {
                                    fetchDataDefault('snow');
                                    toggle('6');
                                  }}
                                >
                                  Уборка и вывоз снега
                                </NavLink>
                              </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab}>
                              <TabPane tabId="1">
                                <Row>
                                  <Col sm="12">
                                    <Button color="success" onClick={() => writeNewAdditions(group)}>
                                      Сохранить
                                    </Button>
                                    <table>
                                      <thead>
                                        <tr>
                                          <th rowSpan="2">
                                            Вес / объём
                                            <br />
                                            мусора
                                          </th>
                                          <th colSpan="4">
                                            Стоимость вывоза мусора для физических лиц за рейс
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>без грузчиков</th>
                                          <th>с 1-м грузчиком</th>
                                          <th>с 2-мя грузчиками</th>
                                          <th>при выезде за МКАД</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {(data && data[0] === 'trash') ? data.map((item, index) => {
                                          if (index > 0) {
                                            return (<Cols4 array={data} index={index} isEdit setData={setData} />);
                                          }
                                        }) : <Spinner color="primary" />}

                                      </tbody>
                                    </table>
                                  </Col>
                                </Row>
                              </TabPane>
                              <TabPane tabId="2">
                                <Row>
                                  <Col sm="12">
                                    <Button color="success" onClick={() => writeNewAdditions(group)}>
                                      Сохранить
                                    </Button>
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
                                            при выезде
                                            <br />
                                            за МКАД
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {(data && data[0] === 'rent') ? data.map((item, index) => {
                                          if (index > 0) {
                                            return (<Cols4 array={data} index={index} isEdit setData={setData} />);
                                          }
                                        }) : <Spinner color="primary" />}
                                      </tbody>
                                    </table>
                                  </Col>
                                </Row>
                              </TabPane>
                              <TabPane tabId="3">
                                <Row>
                                  <Col sm="12">
                                    <Button color="success" onClick={() => writeNewAdditions(group)}>
                                      Сохранить
                                    </Button>
                                    <table>
                                      <thead>
                                        <tr>
                                          <th rowSpan="2">
                                            Вес / объём груза /
                                            длина кузова
                                          </th>
                                          <th colSpan="4">
                                            Стоимость грузоперевозок для физических лиц за рейс
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>без грузчиков</th>
                                          <th>с 1-м грузчиком</th>
                                          <th>с 2-мя грузчиками</th>
                                          <th>при выезде за МКАД</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {(data && data[0] === 'transportation') ? data.map((item, index) => {
                                          if (index > 0) {
                                            return (<Cols4 array={data} index={index} isEdit setData={setData} />);
                                          }
                                        }) : <Spinner color="primary" />}
                                      </tbody>
                                    </table>
                                  </Col>
                                </Row>
                              </TabPane>
                              <TabPane tabId="4">
                                <Row>
                                  <Col sm="12">
                                    <Button color="success" onClick={() => writeNewAdditions(group)}>
                                      Сохранить
                                    </Button>
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
                                        {(data && data[0] === 'movers') ? data.map((item, index) => {
                                          if (index > 0) {
                                            return (<Cols4 array={data} index={index} isEdit setData={setData} />);
                                          }
                                        }) : <Spinner color="primary" />}
                                      </tbody>
                                    </table>
                                  </Col>
                                </Row>
                              </TabPane>
                              <TabPane tabId="5">
                                <Row>
                                  <Col sm="12">
                                    <Button color="success" onClick={() => writeNewAdditions(group)}>
                                      Сохранить
                                    </Button>
                                    <table>
                                      <thead>
                                        <tr>
                                          <th>Контейнер 120 л</th>
                                          <th>Контейнер 240 л</th>
                                          <th>Контейнер 360 л</th>
                                          <th>Контейнер 660 л</th>
                                          <th>Контейнер 1100 л</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          {(data && data[0] === 'containers') ? data.map((item, index) => (
                                            index === 0 ? '' : (
                                              <td>
                                                <textarea
                                                  defaultValue={item}
                                                  onChange={(event) => handleChange(event, index)}
                                                  rows="1"
                                                />
                                              </td>
                                            )
                                          )) : <Spinner color="primary" />}
                                        </tr>
                                      </tbody>
                                    </table>
                                  </Col>
                                </Row>
                              </TabPane>
                              <TabPane tabId="6">
                                <Row>
                                  <Col sm="12">
                                    <Button color="success" onClick={() => writeNewAdditions(group)}>
                                      Сохранить
                                    </Button>
                                    <table>
                                      <thead>
                                        <tr>
                                          <th rowSpan="2">
                                            Вес / объём
                                            <br />
                                            снега
                                          </th>
                                          <th colSpan="4">
                                            Стоимость вывоза снега для физических лиц за рейс
                                          </th>
                                        </tr>
                                        <tr>
                                          <th>без грузчиков</th>
                                          <th>с 1-м грузчиком</th>
                                          <th>с 2-мя грузчиками</th>
                                          <th>при выезде за МКАД</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {(data && data[0] === 'snow') ? data.map((item, index) => {
                                          if (index > 0) {
                                            return (<Cols4 array={data} index={index} isEdit setData={setData} />);
                                          }
                                        }) : <Spinner color="primary" />}
                                      </tbody>
                                    </table>
                                  </Col>
                                </Row>
                              </TabPane>
                            </TabContent>
                          </div>
                        </div>
                      ) : (
                        <div className="signed">
                          Вы не являетесь администратором!
                          <Button onClick={() => firebase.auth().signOut()}>Sign-out</Button>
                        </div>
                      )
                  ) : (
                    <div id="signed-out">
                      <p>Please sign-in:</p>
                      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase ? firebase.auth() : ''} />
                    </div>
                  )
                }
      </Layout>
    </div>
  );
};
