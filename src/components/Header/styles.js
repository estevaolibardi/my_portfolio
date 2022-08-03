import styled from 'styled-components';

export const Container = styled.header`
  display: flex;

  nav {
    ul {
      @media screen and (max-width: 700px) {
        display: none;
      }
    }
  }
`;
