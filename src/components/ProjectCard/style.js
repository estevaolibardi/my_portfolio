import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 60px 0;
  min-height: 300px;

  a {
    text-decoration: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0px 40px 0px;

  h2 {
    color: #46b47a;
    padding-bottom: 15px;
    margin-right: 20px;

    :hover {
      color: #00df88;
    }
  }

  img {
    cursor: pointer;
    width: 340px;
    height: 220px;
    border-radius: 20px;

    -webkit-filter: grayscale(100%);

    :hover {
      -webkit-filter: grayscale(0%);
      /* transition: 1s; */
      transition: background-color 1s ease;
      transition-delay: 5s;
    }
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    padding: 50px 0px 0px 0px;

    img {
      width: 284px;
      height: 167px;
    }

    p {
      font-size: 15px;
    }
  }
`;

export const WrapperRight = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;

  h2 {
    color: #46b47a;
    padding-bottom: 15px;
    margin-right: 20px;

    :hover {
      color: #00df88;
    }
  }

  img {
    cursor: pointer;
    width: 340px;
    height: 220px;
    border-radius: 20px;
    -webkit-filter: grayscale(100%);

    :hover {
      -webkit-filter: grayscale(0%);
      transition: 1s;
    }
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    padding: 50px 0px 0px 0px;

    img {
      width: 284px;
      height: 167px;
    }

    p {
      font-size: 15px;
    }
  }
`;

export const WrapperDescript = styled.div`
  width: 680px;
  padding: 0 100px 0px 58px;

  @media screen and (max-width: 480px) {
    width: 89%;
    padding: 0;
    text-align: justify;
  }
`;

export const WrapperDesc = styled.div`
  width: 600px;
  padding: 0 58px 0px 100px;

  @media screen and (max-width: 480px) {
    width: 89%;
    padding: 0;
    text-align: justify;
  }
`;

export const BoxTitle = styled.div`
  display: flex;
  justify-content: center;

  svg {
    margin-top: 4px;
  }

  a {
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
`;

export const Descript = styled.p`
  font-size: 19px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: lighter;
  line-height: 25px;
`;

export const Tech = styled.p`
  padding: 18px 0px 10px 0px;
  font-size: 16px;
  font-family: 'Ubuntu', sans-serif;
  line-height: 20px;

  span {
    margin-right: 10px;
  }

  /* @media screen and (max-width: 480px) {
    padding: 18px 0px 10px 0px;
  } */
`;
