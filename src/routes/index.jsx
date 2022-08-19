import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/Home';
import AllProjects from '../pages/AllProjects';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/projetos" element={<AllProjects />} />
    </Routes>
  );
};

export default Router;
