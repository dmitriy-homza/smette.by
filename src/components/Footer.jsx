/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap';
import logo from '../images/logo.png';

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <footer>
      <div className="wrapper">
        <Navbar className="d-flex w-100 justify-content-between" expand="md">
          <NavbarBrand tag={Link} to="/" className="garamond">
            <img src={logo} width="50" height="36" alt="Logo" />
            <span>Smette.by</span>
          </NavbarBrand>
          <div className="desktop">
            <h2>Телефоны</h2>
            <Nav navbar vertical>
              <NavItem>
                <NavLink href="tel:+375445749949">
                  +375445749949
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="tel:+375333549949">
                  +375333549949
                </NavLink>
              </NavItem>
            </Nav>
            <h2>Электронная почта:</h2>
            <Nav navbar vertical>
              <NavItem>
                <NavLink href="mailto:tv@smette.by">
                  tv@smette.by
                </NavLink>
              </NavItem>
            </Nav>
            <h2>Наш адрес:</h2>
            <Nav navbar vertical>
              <NavItem>
                <NavLink href="https://yandex.by/maps/?ll=27.415693%2C53.843012&mode=routes&rtext=~53.843012%2C27.415693&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fll%3D27.416%252C53.843%26spn%3D0.001%252C0.001%26text%3D%25D0%2591%25D0%25B5%25D0%25BB%25D0%25B0%25D1%2580%25D1%2583%25D1%2581%25D1%258C%252C%2520%25D0%259C%25D1%2596%25D0%25BD%25D1%2581%25D0%25BA%252C%2520%25D0%259C%25D0%25B0%25D1%2581%25D0%25BA%25D0%25BE%25D1%259E%25D1%2581%25D0%25BA%25D1%2596%2520%25D1%2580%25D0%25B0%25D1%2591%25D0%25BD%252C%2520%25D0%259C%25D1%258F%25D0%25BD%25D1%258C%25D0%25BA%25D0%25BE%25D1%259E%25D1%2581%25D0%25BA%25D1%2596%2520%25D1%2582%25D1%2580%25D0%25B0%25D0%25BA%25D1%2582%252C%252023&z=17.12">
                  <address>г. Минск, Меньковский тракт, 23</address>
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <div className="footer-services">
            <h2>Услуги и стоимость:</h2>
            <Nav navbar vertical>
              <NavItem>
                <NavLink tag={Link} to="/trash" activeClassName="active">
                  Вывоз мусора
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/rent" activeClassName="active">
                  Аренда контейнеров
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/snow" activeClassName="active">
                  Уборка и вывоз снега
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/transportation" activeClassName="active">
                  Грузоперевозки
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/container" activeClassName="active">
                  Продажа контейнеров ТБО
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/movers" activeClassName="active">
                  Услуги грузчиков
                </NavLink>
              </NavItem>
            </Nav>

          </div>

          <Nav className="last-group" navbar vertical>
            <NavItem>
              <NavLink tag={Link} to="/cars" activeClassName="active">
                <h2>Автопарк</h2>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/gallery" activeClassName="active">
                <h2>Наши работы</h2>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contacts" activeClassName="active">
                <h2>Контакты</h2>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    </footer>

  );
}
