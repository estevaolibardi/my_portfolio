import styled from 'styled-components';

export const Container = styled.div`
  background: #212121;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  height: 700px;
  position: relative;
  z-index: 1;
`;

export const Content = styled.div`
  z-index: 3;
  max-width: 595px;
  align-items: flex-start;
  /* position: absolute;
  padding: 8px 24px; */
  display: flex;
  flex-direction: column;

  div {
    background: -webkit-linear-gradient(
      #f3f3f1 0.46%,
      rgba(102, 226, 162, 0.85) 99.59%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (min-width: 1024px) {
    margin-left: 20px;
  }

  @media screen and (min-width: 1200px) {
    margin-left: 20px;
    margin-right: 120px;
  }
`;

export const Title = styled.h1`
  text-align: start;
  font-size: 2.25rem;
  width: 100%;

  @media screen and (min-width: 750px) {
    font-size: 3rem;
    width: 600px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 2.4rem;
    width: 563px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 2.75rem;
    width: 610px;
  }
`;

export const TitleH2 = styled.h2`
  font-size: 1.7rem;
  text-align: start;

  @media screen and (min-width: 750px) {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 1200px) {
    font-size: 2.2rem;
  }
`;

export const Description = styled.p`
  font-family: 'Ubuntu', sans-serif;
  line-height: 26px;
  margin-top: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  text-align: start;
  width: 100%;

  @media screen and (min-width: 1024px) {
    width: 90%;
    font-size: 1.15rem;
  }

  @media screen and (min-width: 1200px) {
    width: 100%;
  }
`;

export const Fig = styled.div`
  height: 300px;
  cursor: pointer;
  display: none;

  img {
    width: 320px;
    margin-top: 30px;
    height: 320px;
  }

  @media screen and (min-width: 750px) {
    font-size: 24px;
    display: flex;
    align-items: center;

    img {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) {
    img {
      display: flex;
      width: 280px;
      height: 280px;
      margin-top: 35px;
    }
  }

  @media screen and (min-width: 1200px) {
    img {
      width: 320px;
      margin-top: 30px;
      height: 320px;
    }
  }
`;

export const Techs = styled.div`
  margin-top: 20px;
`;

export const Html = styled.button`
  padding: 0;
  color: white;
  border: none;
  background: none;

  :hover {
    color: rgb(244 103 51);
  }
`;

export const Css = styled.button`
  margin-right: 10px;

  padding: 0;
  color: white;
  border: none;
  background: none;

  :hover {
    color: rgb(42 96 228);
  }
`;

export const Js = styled.button`
  margin-right: 10px;

  padding: 0;
  color: white;
  border: none;
  background: none;

  :hover {
    color: rgb(239 217 63);
  }
`;

export const Reac = styled.button`
  margin-right: 10px;

  padding: 0;
  color: white;
  border: none;
  background: none;

  :hover {
    color: rgb(87 210 241);
  }
`;
