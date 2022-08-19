import styled from 'styled-components';

export const WrapperRight = styled.div`
  flex-direction: column;
  align-items: center;
  padding: 50px 0px 0px 0px;
  display: flex;

  img {
    width: 280px;
    height: 157.5px;
    cursor: pointer;
  }

  @media screen and (min-width: 375px) {
    img {
      width: 320px;
      height: 180px;
    }
  }

  @media screen and (min-width: 400px) {
    img {
      width: 340px;
      height: 191px;
    }
  }

  @media screen and (min-width: 750px) {
    img {
      width: 340px;
      height: 191px;
    }
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    padding: 0;

    img {
      width: 300px;
      height: 191px;
      border-radius: 20px;
    }
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    padding: 0;

    img {
      width: 340px;
      height: 210px;
      border-radius: 20px;
    }
  }
`;

export const Container = styled.div`
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 2%) 0px 19px 38px, rgb(0 0 0 / 22%) 0px 15px 12px;

  @media screen and (min-width: 375px) {
    max-width: 320px;
  }

  @media screen and (min-width: 400px) {
    max-width: 340px;
  }

  @media screen and (min-width: 750px) {
    max-width: 340px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1020px;
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    box-shadow: none;
  }
`;

export const WrapperDesc = styled.div`
  max-width: 280px;
  display: flex;
  flex-direction: column;
  text-align: justify;

  @media screen and (min-width: 375px) {
    max-width: 320px;
  }

  @media screen and (min-width: 400px) {
    max-width: 340px;
  }

  @media screen and (min-width: 750px) {
    max-width: 340px;
  }

  @media screen and (min-width: 1024px) {
    width: 550px;
    padding: 0 35px 0px 33px;
    max-width: unset;
    box-shadow: none;
  }

  @media screen and (min-width: 1200px) {
    width: 640px;
    padding: 0 58px 0px 70px;
    max-width: unset;
    box-shadow: none;
  }
`;

export const BoxTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  svg {
    margin-top: 4px;
    color: #8c8c8c;

    @media screen and (max-width: 800px) {
      margin-top: 12px;
    }

    :link {
      color: #212121;
    }
    :active {
      color: #212121;
    }
    :visited {
      color: #8c8c8c;
    }
    :hover {
      color: #f3f3f3;
    }
  }

  a {
    h2 {
      color: #46b47a;
      padding-bottom: 15px;
      margin-top: 20px;
      font-size: 1.5rem;

      :hover {
        color: #00df88;
      }

      @media screen and (min-width: 750px) {
        font-size: 1.5rem;
      }
    }

    :link {
      color: #212121;
    }
    :active {
      color: #212121;
    }
    :visited {
      color: #8c8c8c;
    }
    :hover {
      color: #f3f3f3;
    }
  }

  a:last-child {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: unset;

    a {
      h2 {
        margin-top: 0;
        font-size: 1.5rem;
        margin-right: 20px;
      }

      :last-child {
        margin-bottom: 0px;
      }
    }
  }
`;

export const Tech = styled.p`
  padding: 18px 20px 20px 20px;
  font-size: 1rem;
  font-family: 'Ubuntu', sans-serif;
  line-height: 20px;

  /* @media screen and (max-width: 480px) {
    padding: 18px 0px 10px 0px;
  } */
`;

export const Descript = styled.p`
  font-size: 1rem;
  padding: 0 20px;

  @media screen and (min-width: 750px) {
    font-size: 1.15rem;
    font-family: 'Ubuntu', sans-serif;
    font-weight: lighter;
    line-height: 25px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 1200px) {
    font-size: 19px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: lighter;
    line-height: 25px;
  }
`;

export const MoreBtn = styled.div`
  display: flex;
  justify-content: center;

  button {
    color: #00bf75;
    background-color: #212121;
    border-radius: 50px;
    height: 45px;
    border: none;
    cursor: pointer;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    -webkit-text-decoration: none;
    text-decoration: none;

    :hover {
      box-shadow: rgb(138 212 21) 0px 20px 30px -10px;
      background-color: #ffffff;
    }
  }
`;

export const Techh = styled.span`
  margin-right: 8px;

  @media screen and (min-width: 1024px) {
    margin-right: 10px;
  }
`;
