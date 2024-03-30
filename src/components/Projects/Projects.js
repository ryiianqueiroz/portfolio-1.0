import "./Projects.css"
import Insure from "../../assets/desktop-designs/insure-design.jpg"
import TipCalculator from "../../assets/desktop-designs/tip-calculator-design.jpg"
import Sunnyside from "../../assets/desktop-designs/sunnyside-design.jpg"
import GitHub from "../../assets/github-logo-white.png"

function Projects() {
    return (
      <>
        <h1 id="project-h1">Projetos</h1>

        <div className="projects">
          
          <div className="project">
            <div className="project-img">
              <img src={Insure} alt="project-img" />
            </div>
            
            <div className="project-info">
              <p>{'</>'}</p>
              <h1>Insure</h1>
              <hr />
              <p id="p-info-project">Desenvolvimento de um site corporativo com uma interface elegante e intuitiva.</p>
              <div className="links-project">
                <a href="#">
                  <button><img src={GitHub} alt="#" /></button>
                </a>
                <a href="#">
                  <button>Acessar Projeto</button>
                </a>
              </div>
            </div>

          </div>

          <div className="project">
            <div className="project-img">
              <img src={TipCalculator} alt="project-img" />
            </div>
            
            <div className="project-info">
              <p>{'</>'}</p>
              <h1>Splitter</h1>
              <hr />
              <p id="p-info-project">Calcule a contribuição individual necessária da mesa para cobrir a conta.</p>
              <div className="links-project">
                <a href="#">
                  <button><img src={GitHub} alt="#" /></button>
                </a>
                <a href="#">
                  <button>Acessar Projeto</button>
                </a>
              </div>
            </div>

          </div>

          <div className="project">
            <div className="project-img">
              <img src={Sunnyside} alt="project-img" />
            </div>
            
            <div className="project-info">
              <p>{'</>'}</p>
              <h1>Sunnyside</h1>
              <hr />
              <p id="p-info-project">Criação de uma landing page responsiva do desafio oferecido pelo Front End Mentor.</p>
              <div className="links-project">
                <a href="#">
                  <button><img src={GitHub} alt="#" /></button>
                </a>
                <a href="#">
                  <button>Acessar Projeto</button>
                </a>
              </div>
            </div>

          </div>

        </div>
      </>
    );
  }
  
  export default Projects;