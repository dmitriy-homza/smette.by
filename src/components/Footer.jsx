/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap';
import logo from '../images/logo.png';

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <footer>
      <div className="wrapper">
        <Navbar className="d-flex w-100 justify-content-between" expand="md">
          <NavbarBrand tag={Link} to="/" className="garamond">
            <img src={logo} alt="Logo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse className="justify-content-between" isOpen={isOpen} navbar>
            <Nav navbar vertical>
              <h4>Телефоны</h4>
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
              <h4>Электронная почта:</h4>
              <NavItem>
                <NavLink href="mailto:tv@smette.by">
                  tv@smette.by
                </NavLink>
              </NavItem>
              <h4>Наш адрес:</h4>
              <NavItem>
                <NavLink href="yandexnavi://build_route_on_map?lat_to=55.048230&lon_to=83.079110">
                  <address>г. Минск, Меньковский тракт, 23</address>
                </NavLink>
              </NavItem>
            </Nav>
            <Nav navbar vertical>
              <h4>Услуги и стоимость:</h4>
              <NavItem>
                <NavLink tag={Link} to="/services" activeClassName="active">
                  Вывоз мусора
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/cars" activeClassName="active">
                  Аренда контейнеров
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/gallery" activeClassName="active">
                  Уборка и вывоз снега
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contacts" activeClassName="active">
                  Грузоперевозки
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contacts" activeClassName="active">
                  Продажа контейнеров ТБО
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/movers" activeClassName="active">
                  Услуги грузчиков
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="last-group" navbar vertical>
              <NavItem>
                <NavLink tag={Link} to="/cars" activeClassName="active">
                  <h4>Автопарк</h4>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/gallery" activeClassName="active">
                  <h4>Наши работы</h4>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contacts" activeClassName="active">
                  <h4>Контакты</h4>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </footer>
  );
}
