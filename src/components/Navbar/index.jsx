import React from 'react';
import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './styles';

const Navbar = ({ toggle }) => {
  const navigate = useNavigate();
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Portfólio.
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-60}
              >
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={10}
                // onClick={() => {
                //   const anchor = document.querySelector('#contact');
                //   anchor.scrollIntoView({
                //     behavior: 'smooth',
                //     block: 'center',
                //   });
                // }}
              >
                Contact
              </NavLinks>
            </NavItem>

            <NavBtn>
              <a
                href=" https://drive.google.com/file/d/1-39BBOutvO8cHKbsjlg2tgJFvPRo9rf4/view"
                target="_blank"
                rel="noreferrer"
              >
                <NavBtnLink>Cv</NavBtnLink>
              </a>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
