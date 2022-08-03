import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Wrapper,
  WrapperDescript,
  WrapperRight,
  WrapperDesc,
  Tech,
  Descript,
  Wave,
  BoxTitle,
  MoreBtn,
} from './styles';
import { BsGithub, BsFillArrowRightCircleFill } from 'react-icons/bs';
import hamburgueria from '../../styles/hamburgueria.jpg';
import kenzie_hub from '../../styles/kenzie_hub.png';
import kenzie_food from '../../styles/kenzie_food.png';
import nu from '../../assets/Nu.png';

const Projects = () => {
  const navigate = useNavigate();
  return (
    <>
      <Wave></Wave>
      <Container id="projects">
        <h1
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          data-aos-delay="300"
        >
          Projetos
        </h1>

        <hr></hr>

        <Wrapper>
          <img
            data-aos="example-anim2"
            data-aos-delay="300"
            data-aos-anchor-placement="center-center"
            src={kenzie_food}
            alt="hamburguer"
          />
          <WrapperDescript>
            <BoxTitle>
              <a
                href="https://leonardoliska.github.io/Kenzie-Food/"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Kenzie Food</h2>
              </a>

              <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-estevaolibardi">
                <BsGithub size={25} />
              </a>
            </BoxTitle>
            <Descript>
              Projeto e-commerce em Html, Css e Javascript. Foi consumido uma
              api para receber os produtos. Features: adicionar card ao
              carrinho, calcular valor total dos itens no carrinho, botão de
              filtragem de produtos, campo de busca de produtos de acordo com o
              nome.
            </Descript>
          </WrapperDescript>
        </Wrapper>
        <hr></hr>
        <WrapperRight>
          <img
            data-aos="example-anim2"
            data-aos-delay="300"
            data-aos-anchor-placement="center-center"
            src={kenzie_hub}
            alt="hamburguer"
          />
          <WrapperDesc>
            <BoxTitle>
              <a
                href="https://react-entrega-s2-kenzie-hub-estevaolibardi.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Kenzie Hub</h2>
              </a>
              <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-estevaolibardi">
                <BsGithub size={25} />
              </a>
            </BoxTitle>

            <Descript>
              Aplicação em React Js, consumindo uma api para realizar algumas
              funcionalidades da aplicação, como cadastro do usuário e de
              tecnologias aprendidas, bem como deleção e atualização do seu
              status.
            </Descript>
            <Tech>
              styled-components / react-router-dom / axios / yup /
              react-hook-form
            </Tech>
          </WrapperDesc>
        </WrapperRight>
        <hr></hr>
        <Wrapper>
          <img
            data-aos="example-anim2"
            data-aos-delay="300"
            data-aos-anchor-placement="center-center"
            src={nu}
            alt="hamburguer"
          />
          <WrapperDescript>
            <BoxTitle>
              <a
                href="https://app.slack.com/client/TQZR39SET/D02N481S21K"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Controle de Finanças</h2>
              </a>
              <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-estevaolibardi">
                <BsGithub size={25} />
              </a>
            </BoxTitle>

            <Descript>
              Aplicação React Js para gerencimento de gastos, cadastrando
              entradas e saídas.
            </Descript>
          </WrapperDescript>
        </Wrapper>

        <MoreBtn>
          <Link to="/projects">
            <button
              onClick={() => {
                window.scrollTo(0, 0);
                navigate('/projetos');
              }}
            >
              <BsFillArrowRightCircleFill size={45} />
            </button>
          </Link>
        </MoreBtn>
      </Container>
    </>
  );
};

export default Projects;
