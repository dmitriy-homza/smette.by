/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap';
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
  return (
    <header>
      <div className="wrapper">
        <div className="navigation-line">
          <Navbar className="d-flex w-100 justify-content-between" expand="md">
            <NavbarBrand tag={Link} to="/" className="garamond">
              <img src={logo} alt="Logo" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/services" activeClassName="active">
                    Услуги и стоимость
                  </NavLink>
                </NavItem>
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
            <a href="tel:+375445749949"><img src={A1} alt="A1" /></a>
            <a href="/"><img src={viber} alt="Viber" /></a>
            <a href="/"><img src={whatsapp} alt="Whatsapp" /></a>
            <a href="/"><img src={telegram} alt="Telegram" /></a>
            <span>+375445749949</span>
          </div>
          <div>
            <a href="tel:+375333549949"><img src={mts} alt="MTS" /></a>
            <span>+375333549949</span>
          </div>
          <div>
            <a href="mailto:tv@smette.by"><img src={email} alt="Email" /></a>
            <span>tv@smette.by</span>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
