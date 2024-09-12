import "./Nav.css"
import Curriculo from "../../Curriculo.pdf"

function Nav() {
    
  const scrollToBottom = (position) => {
    let widthPage = document.body.offsetWidth;
    let unit = 0

    if ( widthPage > 768 ) {
      
      if ( position === 1 ) {
        unit = 0
      }

      if ( position === 2 ) {
        unit = 600
      }

      if ( position === 3 ) {
        unit = 1200
      }

      if ( position === 4 ) {
        unit = 10000
      }

    } 
    
    if ( widthPage <= 768 ) {

      if ( position === 1 ) {
        unit = 0
      }

      if ( position === 2 ) {
        unit = 590
      }

      if ( position === 3 ) {
        unit = 1450
      }

      if ( position === 4 ) {
        unit = 10000
      }

    } 
    
    if ( widthPage <= 550 ) {

      if ( position === 1 ) {
        unit = 0
      }

      if ( position === 2 ) {
        unit = 590
      }

      if ( position === 3 ) {
        unit = 1600
      }

      if ( position === 4 ) {
        unit = 10000
      }

    }

      window.scrollTo({
        top: unit,
        behavior: 'smooth'
      })
  }  

  let anteriorScroll = window.scrollY;

  window.onscroll = function() {
    let currentScroll = window.scrollY;
    
    if (anteriorScroll > currentScroll) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-150px";
    }

    anteriorScroll = currentScroll;
  }

  function checkElement () {
    const ul = document.querySelector("ul")
    const nav = document.querySelector("#navbar")

    if ( ul.classList.contains("ul-toggle") ) {
      
      ul.classList.remove("ul-toggle")
      document.getElementById("ham").checked = false;
      nav.classList.remove("still")

    } else {
      
      ul.classList.add("ul-toggle")

      nav.classList.add("still")
      
    }
  }
  
    return (
      <nav id="navbar">
        
        <div className="r-flex">
          <span className="r-circle">R</span>
        </div>

        <ul>
          <li onClick={() => [scrollToBottom(1), checkElement()]}>Home</li>
          <li onClick={() => [scrollToBottom(2), checkElement()]}>Sobre Eu</li>
          <li onClick={() => [scrollToBottom(3), checkElement()]}>Projetos</li>
          <li onClick={() => [scrollToBottom(4), checkElement()]}>Contato</li>
          <li id="cv"><a href={Curriculo}><button>Currículo</button></a></li>
        </ul>

        <input type="checkbox" id="ham" onClick={checkElement}/>

        <label htmlFor="ham" className="hamburger">
          <div id="s1"></div>
          <div id="s2"></div>
          <div id="s3"></div>
        </label>
        
      </nav>
    );
  }
  
  export default Nav;