import {
  Container,
  NavLogo,
  Nav,
  NavbarContainer,
  ProjectsContainer,
  Title,
  MoreBtn,
  UpBtn,
} from './styles';
import { mainProjects } from '../database/DataProjects';
import AllProjectsCard from '../components/AllProjectsCard';
import React from 'react';

import { MdKeyboardArrowUp } from 'react-icons/md';
import { animateScroll as scroll } from 'react-scroll';

const AllProjects = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Container>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Portfólio.</NavLogo>
        </NavbarContainer>
      </Nav>

      <ProjectsContainer>
        <Title>
          <h2>Todos os projetos realizados</h2>
        </Title>

        {mainProjects.map((project, i) => (
          <AllProjectsCard key={`Projeto-n°:${i}`} {...project} />
        ))}

        <MoreBtn>
          <UpBtn to="/projetos" onClick={toggleHome}>
            <MdKeyboardArrowUp size={40} />
          </UpBtn>
        </MoreBtn>
      </ProjectsContainer>
    </Container>
  );
};
export default AllProjects;
