import "./Nav.css"

function Nav() {
    
  const scrollToBottom = (quant) => {
      window.scrollTo({
        top: quant,
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

    if ( ul.classList.contains("ul-toggle") ) {
      ul.classList.remove("ul-toggle")
      document.getElementById("ham").checked = false;
    } else {
      ul.classList.add("ul-toggle")
    }
  }
  
    return (
      <nav id="navbar">
        
        <div className="r-flex">
          <span className="r-circle">R</span>
        </div>

        <ul>
          <li onClick={() => [scrollToBottom(0), checkElement()]}>Home</li>
          <li onClick={() => [scrollToBottom(570), checkElement()]}>Sobre Eu</li>
          <li onClick={() => [scrollToBottom(1100), checkElement()]}>Projetos</li>
          <li onClick={() => [scrollToBottom(4000), checkElement()]}>Contato</li>
          <li id="cv"><button>Currículo</button></li>
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