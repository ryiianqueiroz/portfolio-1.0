import "./Projects.css"
import Insure from "../../assets/desktop-designs/insure-design.jpg"
import TipCalculator from "../../assets/desktop-designs/tip-calculator-design.jpg"
import Sunnyside from "../../assets/desktop-designs/sunnyside-design.jpg"
import GitHub from "../../assets/github-logo-white.png"
import OpenLink from "../../assets/open-link-icon.png"
import React from "../../assets/react-colorido.svg"
import SASS from "../../assets/sass-colorido.svg"
import HTML from "../../assets/html-colorido.png"
import CSS from "../../assets/css-colorido.svg"
import JS from "../../assets/javascript-colorido.svg"

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

              <div className="icon-skills">
                <img src={React} alt="react-icon" />
                <img src={SASS} alt="sass-icon" />
                <img src={HTML} alt="html-icon" />
                <img src={CSS} alt="css-icon" />
                <img src={JS} alt="js-icon" />
              </div>

              <div className="links-project">
                <a href="#">
                  <button><img src={GitHub} alt="#" /> Código</button>
                </a>
                <a href="#">
                  <button><img id="open-link" src={OpenLink} alt="#" />Veja</button>
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

              <div className="icon-skills">
                <img src={React} alt="react-icon" />
                <img src={SASS} alt="sass-icon" />
                <img src={HTML} alt="html-icon" />
                <img src={CSS} alt="css-icon" />
                <img src={JS} alt="js-icon" />
              </div>

              <div className="links-project">
                <a href="#">
                  <button><img src={GitHub} alt="#" /> Código</button>
                </a>
                <a href="#">
                  <button><img id="open-link" src={OpenLink} alt="#" />Veja</button>
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
              
              <div className="icon-skills">
                <img src={React} alt="react-icon" />
                <img src={SASS} alt="sass-icon" />
                <img src={HTML} alt="html-icon" />
                <img src={CSS} alt="css-icon" />
                <img src={JS} alt="js-icon" />
              </div>

              <div className="links-project">
                <a href="#">
                  <button><img src={GitHub} alt="#" /> Código</button>
                </a>
                <a href="#">
                  <button><img id="open-link" src={OpenLink} alt="#" />Veja</button>
                </a>
              </div>
            </div>

          </div>

        </div>
      </>
    );
  }
  
  export default Projects;