import { Container } from './style';
import { mainProjects } from '../components/Projects/projects';
import ProjectCard from '../components/ProjectCard';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Siderbar';

const AllProjects = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Container>
        <div className="box">
          <span>Veja Todos os meus projetos</span>
          <h3>Todos os Projetos já Realizados</h3>
        </div>

        {mainProjects.map((project, i) => (
          <ProjectCard key={`Projeto-n°:${i}`} {...project} />
        ))}
        <div className="button-box">
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              navigate('/');
            }}
          >
            Voltar
          </button>
        </div>
      </Container>
    </>
  );
};
export default AllProjects;
