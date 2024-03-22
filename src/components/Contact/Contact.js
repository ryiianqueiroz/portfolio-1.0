import "./Contact.css"
import GitHub from "../../assets/github-logo-white.png"
import Instagram from "../../assets/instagram-logo-white.png"
import Linkedin from "../../assets/linkedin-white-logo.png"

function Contact() {
    return (
        <div className="contacts-images">
            <img src={GitHub} alt="github-logo"/>
            <img src={Instagram} alt="#" />
            <img src={Linkedin} alt="#" />
            <div className="white-border"></div>
        </div>
    );
}

export default Contact;