import React from 'react';
import {
  Wrapper,
  WrapperDescript,
  BoxTitle,
  Descript,
  Tech,
  Techh,
  Container,
} from './style';
import { BsGithub } from 'react-icons/bs';
const ProjectLeftSide = ({
  title,
  img,
  description,
  urlProject,
  urlRepo,
  tech,
}) => {
  return (
    <>
      <Wrapper>
        <Container>
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
                <Techh key={`${urlProject}:${i}`}>{tech}</Techh>
              ))}
            </Tech>
          </WrapperDescript>
        </Container>
      </Wrapper>
    </>
  );
};

export default ProjectLeftSide;
