import React from 'react';
import { useState } from 'react';
import {
  Container,
  Content,
  Title,
  Description,
  Fig,
  TitleH2,
  Techs,
  Css,
  Html,
  Js,
  Reac,
} from './styles';
import Dev from '../../styles/Dev.png';
import Ham from '../../styles/light.png';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';

const Section = ({ children, register }) => {
  const [over, setOver] = useState(false);

  return (
    <>
      <Container>
        <Content data-aos="fade-right" data-aos-duration="3000">
          <div>
            <TitleH2>Olá, meu nome é</TitleH2>
            <Title>Estevão Libardi Desenvolvedor Front-End</Title>
          </div>

          <Description>
            Desenvolvedor Web Full Stack pela Kenzie Academy Brasil. Ao longo de
            mais de 2000 horas de curso, desenvolvi vários projetos, soft skills
            e diversas experiências trabalhando em grupo. No momento estou
            buscando uma oportunidade na área.
          </Description>
        </Content>
        <Fig
          data-aos="fade-left"
          data-aos-duration="3000"
          onMouseOver={() => setOver(true)}
          onMouseOut={() => setOver(false)}
        >
          <img src={over ? Ham : Dev} />
        </Fig>
      </Container>
    </>
  );
};

export default Section;
