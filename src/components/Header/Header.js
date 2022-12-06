import { Container } from '../Container/Container.js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation.js';
import { NavAuth } from '../NavAuth/NavAuth.js';
import { Menu } from '../Menu/Menu.js';
import { MenuButton } from '../MenuButton/MenuButton.js';
import logo from '../../images/logo.svg';
import './Header.css';

export function Header(props) {
  const { isLoggedIn } = props;
  const [isOpened, setIsOpened] = useState(false);

  function open() {
    setIsOpened(true);
  }

  function close() {
    setIsOpened(false);
  }

  return (
    <>
      <header className={`header ${isLoggedIn ? 'header_color_white' : 'header_color_punk'}`}>
        <Container>
          <div className="header__content">
            <Link to="/" className="header__link">
              <img className="header__logo" src={logo} alt="Логотип"/>
            </Link>
            <div className="header__nav">
              {isLoggedIn
                ? <>
                    <div className="header__navigation">
                      <Navigation />
                    </div>    
                    <MenuButton onOpen={open} />
                  </>
                : <NavAuth/>}
            </div>
          </div>
        </Container>
      </header>
      {isLoggedIn && <Menu open={isOpened} onClose={close} />}
    </>
  )
}