import "./Main.css"
import Photomine from "../../assets/photomine.jpg"
import GitHub from "../../assets/github-bw.svg"
import Instagram from "../../assets/instagram-bw.png"
import Linkedin from "../../assets/linkedin-bw.svg"

function Main() {
    return (
      <main>
        <div className="photo-mine">
          <img src={Photomine} alt="#" />
        </div>

        <div className="main-principal">
          <p>Desenvolvedor Front - End</p>
          <h1>Olá, me chamo Ryan</h1>
          <p>Sou estudante de Engenharia de Computação do Instituto Federal de Educação, Ciência e Tecnologia do Ceará. Busco aperfeiçoar minhas habilidades em React JS.</p>

          <div className="main-contact-images">
            <img src={GitHub} alt="#" />
            <img src={Instagram} alt="#" />
            <img src={Linkedin} alt="#" />
          </div>
        </div>
      </main>
    );
  }
  
  export default Main;