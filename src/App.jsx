import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Proyects from './components/proyects/Proyects.jsx';
import Skills from './components/Skills.jsx';
import AboutMe from './components/AboutMe.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="contSections">
        <Proyects />
        <Skills />
        <AboutMe />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App;
