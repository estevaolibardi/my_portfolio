import React from 'react';
import {
  Container,
  Wrapper,
  WrapperDescript,
  BoxTitle,
  Tech,
  Descript,
} from './styles';
import { BsGithub } from 'react-icons/bs';

const ProjectCard = ({
  title,
  img,
  description,
  urlProject,
  urlRepo,
  tech,
}) => {
  return (
    <Container>
      <Wrapper>
        <img
          data-aos="example-anim2"
          data-aos-delay="300"
          data-aos-anchor-placement="center-center"
          src={img}
          alt="hamburguer"
        />
        <WrapperDescript>
          <BoxTitle>
            <a href={urlProject} target="_blank" rel="noreferrer">
              <h2>{title}</h2>
            </a>

            <a href={urlRepo}>
              <BsGithub size={25} />
            </a>
          </BoxTitle>
          <Descript>{description}</Descript>
          <Tech>
            {tech.map((tech, i) => (
              <span key={`${urlProject}:${i}`}>{tech}</span>
            ))}
          </Tech>
        </WrapperDescript>
      </Wrapper>
    </Container>
  );
};

export default ProjectCard;
