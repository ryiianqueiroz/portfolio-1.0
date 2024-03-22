import "./Skills.css"
import Angular from "../../assets/angular-bw.svg"
import HTML from "../../assets/html-bw.svg"
import CSS from "../../assets/css-bw.svg"
import Tailwind from "../../assets/tailwind-bw.svg"
import Javascript from "../../assets/javascript-bw.svg"
import React from "../../assets/react-bw.svg"
import Sass from "../../assets/sass-bw.png"

function Skills() {
    return (
      <>
        <h1 id="skill-h1">Habilidades</h1>

        <div className="skills">
          <div className="skills-group">
            
            <div className="skill">
              <img src={React} alt="#" />
              <h2>React</h2>
              <p>Intermediário</p>
            </div>

            <div className="skill">
              <img src={Sass} alt="#" />
              <h2>Sass</h2>
              <p>Intermediário</p>
            </div>

            <div className="skill">
              <img src={Tailwind} alt="#" />
              <h2>Tailwind</h2>
              <p>Intermediário</p>
            </div>

            <div className="skill">
              <img src={Angular} alt="#" />
              <h2>Angular</h2>
              <p>Básico</p>
            </div>

          </div>

          <div className="skills-group s2">
            
            <div className="skill">
              <img src={HTML} alt="#" />
              <h2>HTML</h2>
              <p>Avançado</p>
            </div>

            <div className="skill">
              <img src={Javascript} alt="#" />
              <h2>Javascript</h2>
              <p>Intermediário</p>
            </div>

            <div className="skill">
              <img src={CSS} alt="#" />
              <h2>CSS</h2>
              <p>Intermediário</p>
            </div>
            
          </div>
        </div>
      </>
    );
  }
  
  export default Skills;