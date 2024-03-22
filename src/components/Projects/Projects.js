import "./Projects.css"

import Ppreview1 from "../../assets/api-desktop-design.jpg"
import Ppreview2 from "../../assets/loop-design.jpg"
import Ppreview3 from "../../assets/multi-step-preview.jpg"
import Ppreview4 from "../../assets/tip-calculator-design.jpg"
import Ppreview5 from "../../assets/sunnyside-design.jpg"
import Angular from "../../assets/angular-colorido.svg"
import React from "../../assets/react-colorido.svg"
import Sass from "../../assets/sass-colorido.svg"
import Tailwind from "../../assets/tailwind-colorido.svg"

function Projects() {
    return (
      <>
        <h1 id="project-h1">Projetos</h1>

        <div className="projects">
          <div className="project">
            <img src={Ppreview1} alt="#" />

            <div className="group-skills">
              <img src={React} alt="#" />
              <img src={Sass} alt="#" />
            </div>

            <h2>Gerador de Conselho</h2>
            <p>Nesse projeto usando API, é mostrado um conselho pro usuário e se caso ele não tiver satisfeito, ele pode gerar outro conselho. :D</p>

            <div className="buttons">
              <a href="https://ryiianqueiroz.github.io/advice-generator-api-react/">Ver Projeto</a>
              <a href="https://github.com/ryiianqueiroz/advice-generator-api-react">Acessar Código</a>
            </div>
          </div>

          <div className="project">
            <img src={Ppreview2} alt="#" />

            <div className="group-skills">
              <img src={React} alt="#" />
              <img src={Sass} alt="#" />
            </div>

            <h2>Loopstudios</h2>
            <p>Exemplo de Landing Page completa responsiva no desafio proposto pelo Front End Mentor</p>

            <div className="buttons">
              <a href="https://ryiianqueiroz.github.io/loopstudios-react-project/">Ver Projeto</a>
              <a href="https://github.com/ryiianqueiroz/loopstudios-react-project">Acessar Código</a>
            </div>
          </div>

          <div className="project">
            <img src={Ppreview3} alt="#" />

            <div className="group-skills">
              <img src={React} alt="#" />
              <img src={Sass} alt="#" />
            </div>

            <h2>Formulário de Cadastro</h2>
            <p>Projeto responsivo de cadastro num serviço detalhando o que usuário deseja nas opções apresentadas pelo serviço.</p>

            <div className="buttons">
              <a href="https://ryiianqueiroz.github.io/multi-step-react/">Ver Projeto</a>
              <a href="https://github.com/ryiianqueiroz/multi-step-react">Acessar Código</a>
            </div>
          </div>

          <div className="project">
            <img src={Ppreview4} alt="#" />

            <div className="group-skills">
              <img src={React} alt="#" />
              <img src={Sass} alt="#" />
            </div>

            <h2>Calculador de Gorjeta</h2>
            <p>Essa calculadora consiste em você preencher os dados da conta, e é devolvido o resultado de quanto você deve transferir em gorjeta</p>

            <div className="buttons">
              <a href="https://ryiianqueiroz.github.io/tip-calculator-react/">Ver Projeto</a>
              <a href="https://github.com/ryiianqueiroz/tip-calculator-react">Acessar Código</a>
            </div>
          </div>

          <div className="project">
            <img src={Ppreview5} alt="#" />

            <div className="group-skills">
              <img src={React} alt="#" />
              <img src={Sass} alt="#" />
            </div>

            <h2>Sunnyside</h2>
            <p>Landing Page proposto pelo Front End Mentor, fazendo uma página inteira responsiva.</p>

            <div className="buttons">
              <a href="https://ryiianqueiroz.github.io/react-sunnyside-responsive/">Ver Projeto</a>
              <a href="https://github.com/ryiianqueiroz/react-sunnyside-responsive">Acessar Código</a>
            </div>
          </div>

          <div className="project">
            <img src={Ppreview4} alt="#" />

            <div className="group-skills">
              <img src={React} alt="#" />
              <img src={Sass} alt="#" />
              <img src={Sass} alt="#" />
            </div>

            <h2>#</h2>
            <p>#</p>

            <div className="buttons">
              <a href="">Ver Projeto</a>
              <a href="">Acessar Código</a>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Projects;