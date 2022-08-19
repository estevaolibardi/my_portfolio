import React from 'react';
import { useState } from 'react';
import { Container, Content, Title, Description, Fig, TitleH2 } from './styles';
import Dev from '../../assets/Dev.png';
import Ham from '../../assets/light.png';

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
