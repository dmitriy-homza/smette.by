/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { Collapse, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap';
import firebase from 'gatsby-plugin-firebase';
import logo from '../images/logo.png';
import mts from '../images/mts.png';
import A1 from '../images/A1.png';
import viber from '../images/viber.png';
import whatsapp from '../images/whatsapp.png';
import email from '../images/email.png';
import telegram from '../images/telegram.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const analytics = firebase.analytics();
  });

  return (
    <header>
      <Helmet htmlAttributes={{
        lang: 'ru',
      }}
      >
        <meta name="yandex-verification" content="2fb08ccfb84fb333" />
      </Helmet>
      <div className="wrapper">
        <div className="navigation-line">
          <Navbar className="d-flex w-100 justify-content-between" expand="md">
            <NavbarBrand tag={Link} to="/" className="garamond">
              <img src={logo} width="50" height="36" alt="Logo" />
              <span>Smette.by</span>
            </NavbarBrand>
            <div className="mobile">
              <a href="viber://chat?number=375445749949"><img width="20" height="20" className="viber" src={viber} alt="Viber" /></a>
              <a href="https://wa.me/+375445749949"><img width="20" height="20" className="whatsapp" src={whatsapp} alt="Whatsapp" /></a>
              <a href="tg://resolve?domain=+375445749949"><img width="20" height="20" className="telegram" src={telegram} alt="Telegram" /></a>
              <a className="email-contact" href="mailto:tv@smette.by">
                <img width="20" height="20" src={email} alt="Email" />
              </a>
            </div>
            <NavbarToggler onClick={toggle}>
              <svg width="40" height="40" fill="#ffbd00" className={isOpen ? 'opened' : ''} viewBox="0 0 100 100">
                <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                <path className="line line2" d="M 20,50 H 80" />
                <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
              </svg>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <Dropdown nav isOpen={dropdownOpen} onMouseLeave={() => setDropdownOpen(false)} onMouseEnter={() => setDropdownOpen(true)}>
                  <DropdownToggle nav caret>
                    Услуги и стоимость
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem><Link to="/trash">Вывоз мусора</Link></DropdownItem>
                    <DropdownItem><Link to="/rent">Аренда контейнеров</Link></DropdownItem>
                    <DropdownItem><Link to="/transportation">Грузоперевозки</Link></DropdownItem>
                    <DropdownItem><Link to="/movers">Услуги грузчиков</Link></DropdownItem>
                    <DropdownItem><Link to="/container">Продажа контейнеров ТБО</Link></DropdownItem>
                    <DropdownItem><Link to="/snow">Уборка и вывоз снега</Link></DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <NavItem>
                  <NavLink tag={Link} to="/cars" activeClassName="active">
                    Автопарк
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/gallery" activeClassName="active">
                    Наши работы
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/contacts" activeClassName="active">
                    Контакты
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
            <div className="work-time desktop">
              <p>
                8.00-20.00
                <br />
                без выходных
              </p>
            </div>
          </Navbar>
        </div>
      </div>
      <div className="info-line">
        <div className="wrapper">
          <div>
            <a href="tel:+375445749949">
              <img width="20" height="20" onMouseLeave={() => document.getElementById('a1').classList.remove('active')} onMouseEnter={() => document.getElementById('a1').classList.add('active')} className="a1" id="a1" src={A1} alt="A1" />
              <div className="desktop">
                <a href="viber://chat?number=375445749949"><img width="20" height="20" className="viber" src={viber} alt="Viber" /></a>
                <a href="https://wa.me/+375445749949"><img width="20" height="20" className="whatsapp" src={whatsapp} alt="Whatsapp" /></a>
                <a href="tg://resolve?domain=+375445749949"><img width="20" height="20" className="telegram" src={telegram} alt="Telegram" /></a>
              </div>
              <span onMouseLeave={() => document.getElementById('a1').classList.remove('active')} onMouseEnter={() => document.getElementById('a1').classList.add('active')}>+375445749949</span>
            </a>
          </div>
          <div>
            <a className="mts" href="tel:+375333549949">
              <img width="20" height="20" src={mts} alt="MTS" />
              <span>+375333549949</span>

            </a>
          </div>
          <div className="desktop">
            <a className="email-contact" href="mailto:tv@smette.by">
              <img width="20" height="20" src={email} alt="Email" />
              <span>tv@smette.by</span>
            </a>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
