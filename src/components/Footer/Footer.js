import "./Footer.css"
import GitHub from "../../assets/github-logo-white.png"
import Instagram from "../../assets/instagram-logo-white.png"
import Linkedin from "../../assets/linkedin-white-logo.png"
import Email from "../../assets/email-icon-white.png"

function Footer() {
    return (
        <footer>
            <div className="email-me">
                <h1>Interesado?</h1>
                <h1>Entre em Contato!</h1>
                <p>Meu email profissional estará sempre aberto para novas oportunidades!</p>
                <div className="btn-email">
                    <div className="email-img">
                        <img src={Email} alt="email-icon" />
                    </div>

                    <div className="email-name">ryanqueirozdev44@gmail.com</div>
                </div>
            </div>

            <div className="contacts-img">
                <img src={GitHub} alt="github-icon" />
                <img src={Instagram} alt="instagram-icon" />
                <img src={Linkedin} alt="linkedin-icon" />
            </div>
            <p>© 2024 - Design e construção por Ryan Queiroz.</p>
        </footer>
    );
  }
  
  export default Footer;