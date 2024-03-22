import './App.css';
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Contact></Contact>
      <Nav></Nav>
      <Main></Main>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
