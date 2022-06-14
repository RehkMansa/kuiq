import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaAlignJustify } from 'react-icons/fa';
import { useState } from 'react';

const MenuWrap = styled.header`
  position: relative;
  padding-top: 0;
  padding-bottom: 0;
`;

const Nav = styled.nav`
  display: flex;
  height: 78px;
  max-height: 78px;
  justify-content: space-between;
  align-items: center;

  img {
    height: 46px;
  }

  .menu-toggle {
    display: none;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    .menu-toggle {
      display: block;
    }
  }
`;

const NavbarLeft = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 30px;

  ul {
    display: flex;
    gap: 30px;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MenuBars = styled.div`
  width: 100%;
  padding: 30px 20px;
  padding-left: 50px;
  border-radius: 44px 10px 44px 24px;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.97);
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  display: none;
  gap: 30px;
  flex-direction: column;
  ul {
    display: flex;
    gap: 20px;
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleMobile = (param) => {
    toggleMenu === true ? setToggleMenu(false) : setToggleMenu(true);
  };
  return (
    <MenuWrap>
      <Nav>
        <Link to="/">
          <img src="images/logo.svg" alt="" />
        </Link>
        <FaAlignJustify onClick={toggleMobile} className="menu-toggle" />
        <NavbarLeft>
          <ul>
            <li>Become a Host</li>
            <li>Sign Up</li>
            <li>Help</li>
          </ul>
          <button>Login</button>
        </NavbarLeft>
      </Nav>
      {toggleMenu && (
        <MenuBars>
          <ul>
            <li>Become a Host</li>
            <li>Sign up</li>
            <li>Login</li>
            <li>Help</li>
          </ul>
        </MenuBars>
      )}
    </MenuWrap>
  );
};

export default Navbar;
