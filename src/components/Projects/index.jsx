import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { mainProjects } from '../../database/DataProjects';
import { Container, Wave, MoreBtn, Hr } from './styles';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import ProjectRightSide from '../ProjectRightSide';
import ProjectLeftSide from '../ProjectLeftSide';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <>
      <Wave></Wave>

      <Container id="projects">
        <h1>Projetos</h1>

        {mainProjects.slice(0, 4).map((project, i) => {
          if (i % 2 == 0) {
            return <ProjectLeftSide key={i} {...project} />;
          } else return <ProjectRightSide key={i} {...project} />;
        })}

        <MoreBtn>
          <Link to="/projetos">
            <button
              onClick={() => {
                window.scrollTo(0, 0);
                navigate('/projetos');
              }}
            >
              <BsFillPlusCircleFill size={45} />
            </button>
          </Link>
        </MoreBtn>

        <Hr></Hr>
      </Container>
    </>
  );
};

export default Projects;
