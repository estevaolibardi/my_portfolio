import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 24px 100px 24px;
`;

export const StyledContactForm = styled.div`
  width: 100%;

  h2 {
    text-align: center;
    padding-bottom: 10px;
    font-size: 30px;
  }

  p {
    font-size: 19px;
  }

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      font-size: 1rem;
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid orange;
      }
    }
    textarea {
      font-size: 1rem;
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid orange;
      }
    }
    label {
      margin-top: 1rem;
      margin-bottom: 0.3rem;
    }
    button {
      margin-top: 2rem;
      font-size: 16px;
      cursor: pointer;
      background: rgb(33 156 110);
      color: white;
      border: none;
      width: 100%;
      height: 35px;
      font-weight: 600;
      border-radius: 5px;

      :active {
        background: red;
        border-top-color: red;
      }

      :hover {
        background: rgb(28 175 121);
      }
    }

    @media screen and (min-width: 350px) {
      padding: 0 20px;
    }

    @media screen and (min-width: 750px) {
      padding: 0 185px;
    }

    @media screen and (min-width: 1024px) {
      width: 400px;
    }
  }

  @media screen and (min-width: 1024px) {
    width: unset;

    form {
      width: 750px;
    }
  }
`;

export const MailIcon = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;

  img {
    width: 250px;
  }

  @media screen and (min-width: 1200px) {
    padding-top: 200px;
  }
`;
