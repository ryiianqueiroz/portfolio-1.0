import "./Footer.css"
import GitHub from "../../assets/github-logo-white.png"
import Instagram from "../../assets/instagram-logo-white.png"

function Footer() {
    return (
        <footer>
            <div className="fpart">
                <div className="fpart1">
                    <h1>Ryan Queiroz</h1>
                    <p>@ 2024 - Ryan Queiroz</p>
                </div>

                <div className="fpart2">
                    <h2>Home</h2>
                    <h2>Sobre Mim</h2>
                    <h2>Habilidades</h2>
                    <h2>Projetos</h2>
                    <h2>Contatos</h2>
                </div>

                <div className="fpart3">
                    <h2>ryanqueirozdev44@gmail.com</h2>
                    <h2>+55 (85) 9259 - 6705</h2>
                    <h2>Fortaleza - Ceara / Brasil</h2>
                </div>

                <div className="fpart4">
                    <img src={GitHub} alt="#" />
                    <img src={Instagram} alt="#" />
                </div>
            </div>
        </footer>
    );
  }
  
  export default Footer;