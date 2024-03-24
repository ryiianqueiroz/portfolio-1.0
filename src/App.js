import './App.css';
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Contact></Contact>
      <Nav></Nav>
      <Main></Main>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
