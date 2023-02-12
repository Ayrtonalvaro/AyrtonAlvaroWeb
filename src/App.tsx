import './App.css';
import Navbar from './Header/Navbar';
import AbouteMe from './main/AbouteMe';
import Contact from './main/Contact';
import Projects from './main/Projects';
import Skills from './main/Skills';


function App() {
  return (
    <div className="App bg-gradient-to-r dark:from-black dark:to-slate-900 relative bg-slate-200  " id="home">
      <Navbar />
      <AbouteMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
