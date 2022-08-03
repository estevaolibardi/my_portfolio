import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/main_page';
import AllProjects from '../pages/projects';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/projects" element={<AllProjects />} />
    </Routes>
  );
};

export default Router;
