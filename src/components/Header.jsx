/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Collapse, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap';
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
  return (
    <header>
      <div className="wrapper">
        <div className="navigation-line">
          <Navbar className="d-flex w-100 justify-content-between" expand="md">
            <NavbarBrand tag={Link} to="/" className="garamond">
              <img src={logo} alt="Logo" />
              <span>Smette.by</span>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <Dropdown nav isOpen={dropdownOpen} onMouseLeave={() => setDropdownOpen(false)} onMouseEnter={() => setDropdownOpen(true)}>
                  <DropdownToggle nav caret>
                    Услуги и стоимость
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Вывоз мусора</DropdownItem>
                    <DropdownItem>Аренда контейнеров</DropdownItem>
                    <DropdownItem>Грузоперевозки</DropdownItem>
                    <DropdownItem tag={Link} to="/movers">Услуги грузчиков</DropdownItem>
                    <DropdownItem>Продажа контейнеров ТБО</DropdownItem>
                    <DropdownItem>Уборка и вывоз снега</DropdownItem>
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
            <div className="work-time">
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
              <img onMouseLeave={() => document.getElementById('a1').classList.remove('active')} onMouseEnter={() => document.getElementById('a1').classList.add('active')} className="a1" id="a1" src={A1} alt="A1" />
              <a href="viber://chat?number=375445749949"><img className="viber" src={viber} alt="Viber" /></a>
              <a href="https://wa.me/+375445749949"><img className="whatsapp" src={whatsapp} alt="Whatsapp" /></a>
              <a href="tg://resolve?domain=+375445749949"><img className="telegram" src={telegram} alt="Telegram" /></a>
              <span onMouseLeave={() => document.getElementById('a1').classList.remove('active')} onMouseEnter={() => document.getElementById('a1').classList.add('active')}>+375445749949</span>
            </a>
          </div>
          <div>
            <a className="mts" href="tel:+375333549949">
              <img src={mts} alt="MTS" />
              <span>+375333549949</span>

            </a>
          </div>
          <div>
            <a className="email-contact" href="mailto:tv@smette.by">
              <img src={email} alt="Email" />
              <span>tv@smette.by</span>
            </a>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
