import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: column;
  margin-bottom: 50px;
  box-shadow: rgb(0 0 0 / 2%) 0px 19px 38px, rgb(0 0 0 / 22%) 0px 15px 12px;

  @media screen and (min-width: 400px) {
    max-width: 340px;
  }

  @media screen and (min-width: 750px) {
    max-width: 340px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1020px;
    margin-bottom: 0;
    padding-bottom: 90px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    box-shadow: none;
  }

  @media screen and (min-width: 1200px) {
    padding-bottom: 90px;
    max-width: unset;
    box-shadow: none;
  }
`;

export const Wrapper = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;

  h2 {
    color: #46b47a;
    padding-bottom: 15px;
    /* margin-right: 20px; */
    margin-top: 20px;

    :hover {
      color: #00df88;
    }
  }

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
    flex-direction: row;
    align-items: flex-start;

    img {
      width: 300px;
      height: 191px;
      border-radius: 20px;
    }
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: center;

    align-items: flex-start;

    img {
      width: 340px;
      height: 210px;
      border-radius: 20px;
    }
  }
`;

export const WrapperDescript = styled.div`
  max-width: 280px;
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
    padding: 0 33px 0px 35px;
    max-width: unset;
    box-shadow: none;
  }

  @media screen and (min-width: 1200px) {
    width: 680px;
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
    justify-content: flex-start;
    padding: 0 20px;

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

export const Tech = styled.p`
  padding: 18px 20px 20px 20px;
  font-size: 1rem;
  font-family: 'Ubuntu', sans-serif;
  line-height: 20px;

  span {
    margin-right: 10px;
  }

  :first-child {
    display: none;
  }
`;
