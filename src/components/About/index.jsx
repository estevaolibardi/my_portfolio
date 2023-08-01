import React from 'react';
import {
  Container,
  ImgContainer,
  Wrapper,
  Icons,
  Linkedin,
  Insta,
  Box,
  HardSkills,
  TechContainer,
  Skills,
  HardBox,
  Wave,
} from './styles';
import Libardi from '../../assets/me.jpg';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <Container id="about">
      <Wave></Wave>
      <Box>
        <ImgContainer>
          <img src={Libardi} alt="perfil_photo" />
        </ImgContainer>

        <Wrapper>
          <h1>Sobre mim</h1>

          <Icons>
            <Linkedin>
              <a href="https://www.linkedin.com/in/estevao-libardi/">
                <FaLinkedin size={29} />
              </a>
            </Linkedin>

            <Insta>
              <a href="https://www.instagram.com/estevaolibardi/">
                <BsInstagram
                  size={27.5}
                  // onMouseOver={({ target }) => (target.style.color = 'green')}
                  // onMouseOut={({ target }) => (target.style.color = 'black')}
                />
              </a>
            </Insta>
          </Icons>

          <p>
            Sempre tive muito contato com a tecnologia, mas só fui conhecer a
            área de programação recentemente. Acho fascinante estar em uma área
            em que estou constantemente aprendendo novas tecnologias, resolvendo
            problemas, e fazendo parte do progresso e inovação!
          </p>
        </Wrapper>
      </Box>
      <HardSkills>
        <HardBox>
          <TechContainer>
            <h2>Hardskills:</h2>
            <Skills>
              <div>
                <ul>
                  <li>HTML 5</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>React Js</li>
                  <li>Next Js</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Node Js</li>
                  <li>Express</li>
                  <li>TypeORM</li>
                  <li>Prisma</li>
                  <li>Typescript</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Python</li>
                  <li>Django</li>
                  <li>Postgresql</li>
                  <li>Git</li>
                  <li>Styled-C</li>
                </ul>
              </div>
            </Skills>
          </TechContainer>
        </HardBox>
      </HardSkills>
    </Container>
  );
};

export default About;
