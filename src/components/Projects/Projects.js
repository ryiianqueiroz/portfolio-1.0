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
                <a href="https://github.com/ryiianqueiroz/insure-react-project">
                  <button><img src={GitHub} alt="#" /> Código</button>
                </a>
                <a href="https://ryiianqueiroz.github.io/insure-react-project/">
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
                <a href="https://github.com/ryiianqueiroz/tip-calculator-react">
                  <button><img src={GitHub} alt="#" /> Código</button>
                </a>
                <a href="https://ryiianqueiroz.github.io/tip-calculator-react/">
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
                <a href="https://github.com/ryiianqueiroz/react-sunnyside-responsive">
                  <button><img src={GitHub} alt="#" /> Código</button>
                </a>
                <a href="https://ryiianqueiroz.github.io/react-sunnyside-responsive/">
                  <button><img id="open-link" src={OpenLink} alt="#" />Veja</button>
                </a>
              </div>
            </div>

          </div>

        </div>

        <div className="other-projects">
          
          <div className="ot-project">
            <div className="links-ot-project">
              <hr />

              <div className="links-ot">
                <a href="https://github.com/ryiianqueiroz/advice-generator-api-react"><img src={GitHub} alt="#" id="git-icon" /></a>
                <a href="https://ryiianqueiroz.github.io/advice-generator-api-react/"><img src={OpenLink} alt="#" id="link-icon" /></a>
              </div>
            </div>

            <h1>Advice</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem odit at ab explicabo! Tenetur consectetur exercitationem modi iste harum, porro beatae perspiciatis omnis aut sequi nemo earum ut numquam?</p>
            <div className="icon-skills">
                <img src={React} alt="react-icon" />
                <img src={SASS} alt="sass-icon" />
                <img src={HTML} alt="html-icon" />
                <img src={CSS} alt="css-icon" />
                <img src={JS} alt="js-icon" />
            </div>
          </div>

          <div className="ot-project">
            <div className="links-ot-project">
              <hr />

              <div className="links-ot">
                <a href="https://github.com/ryiianqueiroz/password-generator"><img src={GitHub} alt="#" id="git-icon" /></a>
                <a href="https://ryiianqueiroz.github.io/password-generator/"><img src={OpenLink} alt="#" id="link-icon" /></a>
              </div>
            </div>

            <h1>Senha Forte</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem odit at ab explicabo! Tenetur consectetur exercitationem modi iste harum, porro beatae perspiciatis omnis aut sequi nemo earum ut numquam?</p>
            <div className="icon-skills">
                <img src={React} alt="react-icon" />
                <img src={SASS} alt="sass-icon" />
                <img src={HTML} alt="html-icon" />
                <img src={CSS} alt="css-icon" />
                <img src={JS} alt="js-icon" />
            </div>
          </div>

          <div className="ot-project">
            <div className="links-ot-project">
              <hr />

              <div className="links-ot">
                <a href="https://github.com/ryiianqueiroz/loopstudios-react-project"><img src={GitHub} alt="#" id="git-icon" /></a>
                <a href="https://ryiianqueiroz.github.io/loopstudios-react-project/"><img src={OpenLink} alt="#" id="link-icon" /></a>
              </div>
            </div>

            <h1>loopstudios</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem odit at ab explicabo! Tenetur consectetur exercitationem modi iste harum, porro beatae perspiciatis omnis aut sequi nemo earum ut numquam?</p>
            <div className="icon-skills">
                <img src={React} alt="react-icon" />
                <img src={SASS} alt="sass-icon" />
                <img src={HTML} alt="html-icon" />
                <img src={CSS} alt="css-icon" />
                <img src={JS} alt="js-icon" />
            </div>
          </div>

          <div className="ot-project">
            <div className="links-ot-project">
              <hr />

              <div className="links-ot">
                <a href="https://github.com/ryiianqueiroz/snap-tailwind"><img src={GitHub} alt="#" id="git-icon"/></a>
                <a href="https://ryiianqueiroz.github.io/snap-tailwind/"><img src={OpenLink} alt="#" id="link-icon"/></a>
              </div>
            </div>

            <h1>SNAP</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem odit at ab explicabo! Tenetur consectetur exercitationem modi iste harum, porro beatae perspiciatis omnis aut sequi nemo earum ut numquam?</p>
            <div className="icon-skills">
                <img src={React} alt="react-icon" />
                <img src={SASS} alt="sass-icon" />
                <img src={HTML} alt="html-icon" />
                <img src={CSS} alt="css-icon" />
                <img src={JS} alt="js-icon" />
            </div>
          </div>

          <div className="ot-project">
            <div className="links-ot-project">
              <hr />

              <div className="links-ot">
                <a href="https://github.com/ryiianqueiroz/react-pricing-component"><img src={GitHub} alt="#" id="git-icon" /></a>
                <a href="https://ryiianqueiroz.github.io/react-pricing-component/"><img src={OpenLink} alt="#" id="link-icon" /></a>
              </div>
            </div>

            <h1>Tabela de Preços</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem odit at ab explicabo! Tenetur consectetur exercitationem modi iste harum, porro beatae perspiciatis omnis aut sequi nemo earum ut numquam?</p>
            <div className="icon-skills">
                <img src={React} alt="react-icon" />
                <img src={SASS} alt="sass-icon" />
                <img src={HTML} alt="html-icon" />
                <img src={CSS} alt="css-icon" />
                <img src={JS} alt="js-icon" />
            </div>
          </div>

          <div className="ot-project">
            <div className="links-ot-project">
              <hr />

              <div className="links-ot">
                <a href="https://github.com/ryiianqueiroz/social-media-dashboard"><img src={GitHub} alt="#" id="git-icon" /></a>
                <a href="https://ryiianqueiroz.github.io/social-media-dashboard/"><img src={OpenLink} alt="#" id="link-icon" /></a>
              </div>
            </div>

            <h1>Social Media</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem odit at ab explicabo! Tenetur consectetur exercitationem modi iste harum, porro beatae perspiciatis omnis aut sequi nemo earum ut numquam?</p>
            <div className="icon-skills">
                <img src={React} alt="react-icon" />
                <img src={SASS} alt="sass-icon" />
                <img src={HTML} alt="html-icon" />
                <img src={CSS} alt="css-icon" />
                <img src={JS} alt="js-icon" />
            </div>
          </div>

        </div>
      </>
    );
  }
  
  export default Projects;