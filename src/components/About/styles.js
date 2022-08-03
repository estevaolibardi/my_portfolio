import styled from 'styled-components';

export const Container = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  padding: 0px 0px 100px 0px;
  background-color: #ffff;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    padding: 100px 24px;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: flex-end;

  img {
    width: 239px;
    height: 298px;
    border-radius: 20px;
    display: flex;

    -moz-box-shadow: 0px 6px 5px #ccc;
    -webkit-box-shadow: 0px 6px 5px #ccc;
    box-shadow: 0px 6px 5px #ccc;
  }

  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
`;

export const HardSkills = styled.div`
  display: flex;

  justify-content: center;

  margin-top: 50px;
`;

export const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 547px;
  justify-content: space-around;

  h2 {
    font-size: 25px;
    color: #46b47a;
    padding-bottom: 20px;
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  flex-direction: row;
  justify-content: space-evenly;

  div {
    margin-right: 40px;
  }
`;

export const HardBox = styled.div`
  display: flex;
  width: 793px;
  justify-content: flex-end;
`;

export const Wrapper = styled.div`
  max-width: 671px;
  padding-left: 60px;

  h1 {
    font-size: 40px;
    color: #46b47a;
    padding-bottom: 20px;
  }

  p {
    font-size: 20px;
    white-space: break-spaces;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 0;

    p {
      text-align: center;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-bottom: 20px;
`;

export const Linkedin = styled.span`
  font-size: 20px;

  svg {
    margin: 0 20px 0px 0px;
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
      color: rgb(57 156 249);
    }
  }
`;

export const Insta = styled.span`
  font-size: 20px;

  svg {
    margin: 0 20px 0px 0px;
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
      color: rgb(227 91 168);
    }
  }
`;

export const Wave = styled.div`
  height: 130px;
  background-color: #212121;
  clip-path: polygon(
    100% 0%,
    0% 0%,
    0% 96%,
    1% 95.95%,
    2% 95.79%,
    3% 95.52%,
    4% 95.15%,
    5% 94.67%,
    6% 94.09%,
    7% 93.41%,
    8% 92.63%,
    9% 91.75%,
    10% 90.78%,
    11% 89.71%,
    12% 88.55%,
    13% 87.3%,
    14% 85.97%,
    15% 84.55%,
    16% 83.06%,
    17% 81.49%,
    18% 79.86%,
    19% 78.15%,
    20% 76.39%,
    21% 74.56%,
    22% 72.69%,
    23% 70.76%,
    24% 68.79%,
    25% 66.79%,
    26% 64.75%,
    27% 62.68%,
    28% 60.59%,
    29% 58.47%,
    30% 56.35%,
    31% 54.22%,
    32% 52.09%,
    33% 49.96%,
    34% 47.84%,
    35% 45.73%,
    36% 43.64%,
    37% 41.57%,
    38% 39.54%,
    39% 37.54%,
    40% 35.58%,
    41% 33.66%,
    42% 31.79%,
    43% 29.98%,
    44% 28.22%,
    45% 26.53%,
    46% 24.91%,
    47% 23.35%,
    48% 21.87%,
    49% 20.47%,
    50% 19.15%,
    51% 17.92%,
    52% 16.77%,
    53% 15.72%,
    54% 14.76%,
    55% 13.9%,
    56% 13.13%,
    57% 12.47%,
    58% 11.91%,
    59% 11.45%,
    60% 11.09%,
    61% 10.85%,
    62% 10.7%,
    63% 10.67%,
    64% 10.74%,
    65% 10.92%,
    66% 11.2%,
    67% 11.59%,
    68% 12.08%,
    69% 12.68%,
    70% 13.38%,
    71% 14.18%,
    72% 15.07%,
    73% 16.06%,
    74% 17.15%,
    75% 18.32%,
    76% 19.59%,
    77% 20.93%,
    78% 22.36%,
    79% 23.87%,
    80% 25.44%,
    81% 27.09%,
    82% 28.81%,
    83% 30.58%,
    84% 32.42%,
    85% 34.3%,
    86% 36.23%,
    87% 38.21%,
    88% 40.22%,
    89% 42.27%,
    90% 44.34%,
    91% 46.44%,
    92% 48.55%,
    93% 50.67%,
    94% 52.8%,
    95% 54.94%,
    96% 57.07%,
    97% 59.19%,
    98% 61.29%,
    99% 63.38%,
    100% 65.44%
  );
`;
