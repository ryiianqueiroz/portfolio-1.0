import "./Contact.css"
import GitHub from "../../assets/github-logo-white.png"
import Instagram from "../../assets/instagram-logo-white.png"
import Linkedin from "../../assets/linkedin-white-logo.png"

function Contact() {
    return (
        <div className="contacts-images">
            <a href="https://github.com/ryiianqueiroz"><img src={GitHub} alt="github-logo"/></a>
            <a href="https://www.instagram.com/ry4n.queiroz/"><img src={Instagram} alt="#"/></a>
            <a href="https://www.linkedin.com/in/ryan-queiroz-4305212ba/"><img src={Linkedin} alt="#"/></a>
            <div className="white-border"></div>
        </div>
    );
}

export default Contact;