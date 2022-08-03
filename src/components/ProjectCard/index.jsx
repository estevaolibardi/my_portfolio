import React from 'react';
import {
  Container,
  Wrapper,
  WrapperDescript,
  BoxTitle,
  WrapperRight,
  WrapperDesc,
  Descript,
  Tech,
} from './style';
import { BsGithub, BsFillArrowRightCircleFill } from 'react-icons/bs';

const ProjectCard = ({
  title,
  image,
  description,
  urlProject,
  urlRepo,
  technologies,
}) => {
  return (
    <Container>
      <Wrapper>
        <img
          data-aos="example-anim2"
          data-aos-delay="300"
          data-aos-anchor-placement="center-center"
          src={image}
          alt="hamburguer"
        />
        <WrapperDescript>
          <BoxTitle>
            <a href={urlRepo} target="_blank" rel="noreferrer">
              <h2>{title}</h2>
            </a>

            <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-estevaolibardi">
              <BsGithub size={25} />
            </a>
          </BoxTitle>
          <div>{description}</div>
          <Tech>
            {technologies.map((tech, i) => (
              <span key={`${urlProject}:${i}`}>{tech}</span>
            ))}
          </Tech>
        </WrapperDescript>
      </Wrapper>
    </Container>
  );
};

export default ProjectCard;
