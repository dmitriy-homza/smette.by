/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import '../styles/index.scss';
import firebase from 'gatsby-plugin-firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import classnames from 'classnames';
import Layout from '../components/Layout';

require('firebase/auth');

export default () => {
  const [uiConfig, setUIConfig] = useState(null);
  const [hasAccount, setAccount] = useState(false);
  const [currentUser, setUI] = useState(false);
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
  }, []);
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  if (!uiConfig) {
    return <p>Loading...</p>;
  }
  return (
    <div className="admin">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Администрирование - Смецце</title>
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
                                  onClick={() => { toggle('1'); }}
                                >
                                  Вывоз мусора
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  className={classnames({ active: activeTab === '2' })}
                                  onClick={() => { toggle('2'); }}
                                >
                                  Аренда контейнеров
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  className={classnames({ active: activeTab === '3' })}
                                  onClick={() => { toggle('3'); }}
                                >
                                  Грузоперевозки
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  className={classnames({ active: activeTab === '4' })}
                                  onClick={() => { toggle('4'); }}
                                >
                                  Услуги грузчиков
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  className={classnames({ active: activeTab === '5' })}
                                  onClick={() => { toggle('5'); }}
                                >
                                  Продажа контейнеров ТБО
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  className={classnames({ active: activeTab === '6' })}
                                  onClick={() => { toggle('6'); }}
                                >
                                  Уборка и вывоз снега
                                </NavLink>
                              </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab}>
                              <TabPane tabId="1">
                                <Row>
                                  <Col sm="12">
                                    <h4>Tab 1 Contents</h4>
                                  </Col>
                                </Row>
                              </TabPane>
                              <TabPane tabId="2">
                                <Row>
                                  <Col sm="6">
                                    <Card body>
                                      <CardTitle>Special Title Treatment</CardTitle>
                                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                      <Button>Go somewhere</Button>
                                    </Card>
                                  </Col>
                                  <Col sm="6">
                                    <Card body>
                                      <CardTitle>Special Title Treatment</CardTitle>
                                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                      <Button>Go somewhere</Button>
                                    </Card>
                                  </Col>
                                </Row>
                              </TabPane>

                              <TabPane tabId="3">
                                <Row>
                                  <Col sm="12">
                                    <h4>Tab 1 Contents</h4>
                                  </Col>
                                </Row>
                              </TabPane>
                              <TabPane tabId="4">
                                <Row>
                                  <Col sm="12">
                                    <h4>Tab 1 Contents</h4>
                                  </Col>
                                </Row>
                              </TabPane>
                              <TabPane tabId="5">
                                <Row>
                                  <Col sm="12">
                                    <h4>Tab 1 Contents</h4>
                                  </Col>
                                </Row>
                              </TabPane>
                              <TabPane tabId="6">
                                <Row>
                                  <Col sm="12">
                                    <h4>Tab 1 Contents</h4>
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
