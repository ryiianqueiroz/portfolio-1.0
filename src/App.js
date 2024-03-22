import './App.css';
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Main></Main>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
