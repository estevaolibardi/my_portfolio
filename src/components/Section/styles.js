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
    margin-right: 120px;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  text-align: start;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const TitleH2 = styled.h2`
  font-size: 32px;
  text-align: start;
`;

export const Description = styled.p`
  font-family: 'Ubuntu', sans-serif;
  line-height: 26px;
  margin-top: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  text-align: start;
  width: 100%;
  /* max-width: 600px; */

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
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

  @media screen and (min-width: 768px) {
    font-size: 24px;
    display: flex;
    align-items: center;
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
