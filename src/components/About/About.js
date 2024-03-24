import "./About.css"

function About() {
    return (
      <section>
        <h1>Sobre Eu</h1>
      
        <div className="about-me">
          <div className="text-about-me">
            <p>Originário de Fortaleza, no Ceará, mergulhei no empolgante mundo da programação quando ingressei no Instituto Federal de Educação, Ciência e Tecnologia do Ceará, onde atualmente curso o 5 * Semestre de Engenharia da Computação.</p>
            
            <p>Sou um profissional dedicado, com experiência sólida em desenvolvimento Front-End 
              utilizando as mais recentes tecnologias, com foco especial em React.
            </p>

            <p>No momento, estou trabalhando em diversos projetos para aprimorar minhas habilidades e constantemente explorando novas tecnologias em demanda no mercado.</p>
          </div>
          <div className="photo-me"></div>
        </div>
      </section>
    );
  }
  
  export default About;