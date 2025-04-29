import "./About.css"
import React from "../../assets/react-colorido.svg";
import Sass from "../../assets/sass-colorido.svg";
import Tailwind from "../../assets/tailwind-colorido.svg";
import CSS from "../../assets/css-colorido.svg";
import HTML from "../../assets/html-colorido.png";
import Javascript from "../../assets/javascript-colorido.svg"
import MinhaFoto from "../../assets/minha-foto.jpeg"
import Node from "../../assets/node-js.png"
import NextJS from "../../assets/Next.js.png"

function About() {
    return (
      <section>
        <h1 id="about-me-h1">Sobre Eu</h1>
      
        <div className="about-me">
          <div className="text-about-me">
            <p>Natural de Fortaleza, no Ceará, minha jornada no fascinante mundo da programação começou quando iniciei meu curso no Instituto Federal de Educação, Ciência e Tecnologia do Ceará. Atualmente, estou no 5º semestre do curso de Engenharia da Computação.</p>
            <p>No momento, estou trabalhando em diversos projetos para aprimorar minhas habilidades e constantemente explorando novas tecnologias em demanda no mercado.</p>

            <h2>Tecnologias Usadas:</h2>
            <div className="tecnology-used">
              <img src={React} alt="#" />
              <img src={NextJS} alt="#"/>
              <img src={Sass} alt="#" />
              <img src={Tailwind} alt="#" />
              <img src={HTML} alt="#" />
              <img src={CSS} alt="#" />
              <img src={Javascript} alt="#" />
              <img src={Node} alt="#"></img>
            </div>

          </div>
          
          <div className="photo-me">
            <div className="my-photo">
              <img src={MinhaFoto} alt="foto" className="portifolio-foto"/>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;