import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 150px;
  flex-direction: column;

  hr {
    display: none;
  }

  [data-aos='example-anim2'] {
    -webkit-filter: grayscale(100%);

    transition-property: background;
    transition-duration: 5s;
    &.aos-animate {
      -webkit-filter: grayscale(0%);
    }
  }

  h1 {
    display: flex;
    justify-content: center;
    font-size: 35px;

    padding-bottom: 50px;
  }

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 480px) {
    /* padding: 100px 24px; */

    h1 {
      padding-bottom: 30px;
    }

    hr {
      display: flex;
      border: none;
      width: 100%;
      height: 50px;
      margin-top: 0;
      box-shadow: 0 20px 20px -20px #999999;
      box-shadow: 0 20px 40px -20px #bfbfbf;
    }

    h2 {
      padding-top: 10px;
      font-size: 22px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 0px 100px 0px;

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

export const Tech = styled.p`
  padding: 18px 0px 10px 0px;
  font-size: 16px;
  font-family: 'Ubuntu', sans-serif;
  line-height: 20px;

  /* @media screen and (max-width: 480px) {
    padding: 18px 0px 10px 0px;
  } */
`;

export const Descript = styled.p`
  font-size: 19px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: lighter;
  line-height: 25px;
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

export const Wave = styled.div`
  height: 250px;
  background-color: #ffffff;
  clip-path: polygon(
    100% 0%,
    0% 0%,
    0% 76.67%,
    1% 76.64%,
    2% 76.56%,
    3% 76.43%,
    4% 76.24%,
    5% 76.01%,
    6% 75.72%,
    7% 75.38%,
    8% 74.99%,
    9% 74.56%,
    10% 74.07%,
    11% 73.54%,
    12% 72.96%,
    13% 72.34%,
    14% 71.67%,
    15% 70.96%,
    16% 70.22%,
    17% 69.43%,
    18% 68.61%,
    19% 67.75%,
    20% 66.86%,
    21% 65.94%,
    22% 64.99%,
    23% 64.02%,
    24% 63.02%,
    25% 62%,
    26% 60.95%,
    27% 59.9%,
    28% 58.82%,
    29% 57.74%,
    30% 56.64%,
    31% 55.54%,
    32% 54.43%,
    33% 53.32%,
    34% 52.21%,
    35% 51.1%,
    36% 50%,
    37% 48.9%,
    38% 47.82%,
    39% 46.74%,
    40% 45.68%,
    41% 44.64%,
    42% 43.62%,
    43% 42.62%,
    44% 41.65%,
    45% 40.7%,
    46% 39.78%,
    47% 38.89%,
    48% 38.04%,
    49% 37.22%,
    50% 36.43%,
    51% 35.68%,
    52% 34.98%,
    53% 34.31%,
    54% 33.69%,
    55% 33.11%,
    56% 32.58%,
    57% 32.1%,
    58% 31.66%,
    59% 31.27%,
    60% 30.94%,
    61% 30.65%,
    62% 30.42%,
    63% 30.23%,
    64% 30.1%,
    65% 30.03%,
    66% 30%,
    67% 30.03%,
    68% 30.11%,
    69% 30.24%,
    70% 30.43%,
    71% 30.67%,
    72% 30.95%,
    73% 31.29%,
    74% 31.68%,
    75% 32.12%,
    76% 32.61%,
    77% 33.14%,
    78% 33.72%,
    79% 34.35%,
    80% 35.01%,
    81% 35.72%,
    82% 36.47%,
    83% 37.26%,
    84% 38.08%,
    85% 38.94%,
    86% 39.83%,
    87% 40.75%,
    88% 41.7%,
    89% 42.68%,
    90% 43.68%,
    91% 44.7%,
    92% 45.74%,
    93% 46.8%,
    94% 47.87%,
    95% 48.96%,
    96% 50.06%,
    97% 51.16%,
    98% 52.27%,
    99% 53.38%,
    100% 54.49%
  );
`;
