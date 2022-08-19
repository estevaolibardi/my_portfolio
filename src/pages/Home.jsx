import { useState } from 'react';
import Navbar from '../components/Navbar';
import 'aos/dist/aos.css';
import Sidebar from '../components/Siderbar';
import Section from '../components/Section';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import ContactMe from '../components/ContactMe';

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Section />
      <About />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
};
export default MainPage;
