import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  [data-aos='example-anim2'] {
    -webkit-filter: grayscale(100%);

    transition-property: background;
    transition-duration: 5s;
    &.aos-animate {
      -webkit-filter: grayscale(0%);
    }
  }

  a {
    text-decoration: none;
  }
`;

export const ProjectsContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px 20px 60px;
  align-items: center;

  div {
    h3 {
      display: inline-block;
      position: relative;
      margin: 0 0 40px;
      text-align: center;
      @media (max-width: 768px) {
        padding: 0 10px;
      }
    }
  }
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.3rem;
  display: flex;

  align-items: center;

  font-weight: bold;
  text-decoration: none;

  @media screen and (min-width: 1024px) {
    margin-left: 24px;
  }
`;

export const Nav = styled.nav`
  background: #212121ba;
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1400px;
`;

export const Title = styled.div`
  h2 {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 100px;
    font-size: 25px;
    text-align: center;
  }

  @media screen and (min-width: 1024px) {
    width: 1020px;

    h2 {
      margin-right: 170px;
      font-size: 30px;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 1020px;

    h2 {
      margin-right: 235px;
    }
  }
`;

export const MoreBtn = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 80px;
`;

export const UpBtn = styled(LinkR)`
  color: #212121;
  border-radius: 40px;
  background-color: #00bf75;
  width: 40px;
  height: 40px;

  :hover {
    box-shadow: rgb(156 255 0) 0px 20px 30px -10px;
    background-color: #06d987;
  }

  svg {
    :hover {
      color: white;
    }
  }
`;
