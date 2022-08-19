import React from 'react';
import {
  BoxTitle,
  WrapperRight,
  WrapperDesc,
  Descript,
  Tech,
  Techh,
  Container,
} from './style';
import { BsGithub, BsFillArrowRightCircleFill } from 'react-icons/bs';
const ProjectRightSide = ({
  title,
  img,
  description,
  urlProject,
  urlRepo,
  tech,
}) => {
  return (
    <>
      <WrapperRight>
        <Container>
          <img
            data-aos="example-anim2"
            data-aos-delay="300"
            data-aos-anchor-placement="center-center"
            src={img}
            alt="hamburguer"
          />
          <WrapperDesc>
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
          </WrapperDesc>
        </Container>
      </WrapperRight>
    </>
  );
};

export default ProjectRightSide;
