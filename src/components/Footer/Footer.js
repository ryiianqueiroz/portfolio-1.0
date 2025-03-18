import "./Footer.css"
import { useRef, useEffect } from "react"
import GitHub from "../../assets/github-logo-white.png"
import Instagram from "../../assets/instagram-logo-white.png"
import Linkedin from "../../assets/linkedin-white-logo.png"
import Email from "../../assets/email-icon-white.png"

function Footer() {

    const ref = useRef(null);

    useEffect(() => {
        const ativarClick = (event) => {
            let r = document.querySelector(':root');
            r.style.setProperty('--conteudo', '"Copiado!"');
        };
        
        const element = ref.current;

        element.addEventListener('click', ativarClick);
      
        return () => {
          element.removeEventListener('click', ativarClick);
        };
    }, []);

    const tirarClick = () => {
        let r = document.querySelector(':root');
        r.style.setProperty('--conteudo', '"Copiar"');
    }

    return (
        <footer>
            <div className="email-me">
                <h1>Interesado?</h1>
                <h1>Entre em Contato!</h1>
                <p>Meu email profissional estará sempre aberto para novas oportunidades!</p>
                
                <div className="btn-email" ref={ref} onMouseLeave={tirarClick} onClick={() =>  navigator.clipboard.writeText('ryanqueirozdev44@gmail.com')}>
                    <div className="email-img">
                        <img src={Email} alt="email-icon" />
                    </div>

                    <div className="email-name">ryanqueirozdev44@gmail.com</div>
                </div>
            </div>

            <div className="contacts-img">
                <a href="https://github.com/ryiianqueiroz"><img src={GitHub} alt="github-logo"/></a>
                <a href="https://www.instagram.com/ry4n.queiroz/"><img src={Instagram} alt="#"/></a>
                <a href="https://www.linkedin.com/in/ryan-queiroz-4305212ba/"><img src={Linkedin} alt="#"/></a>
            </div>
            <p>© 2024 - Design e construção por Ryan Queiroz.</p>
        </footer>
    );
  }
  
  export default Footer;