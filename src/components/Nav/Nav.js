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
  
    return (
      <nav id="navbar">
        
        <div className="r-flex">
          <span className="r-circle">R</span>
        </div>

        <ul>
          <li onClick={() => scrollToBottom(0)}>Home</li>
          <li onClick={() => scrollToBottom(570)}>Sobre Eu</li>
          <li onClick={() => scrollToBottom(1100)}>Projetos</li>
          <li onClick={() => scrollToBottom(4000)}>Contato</li>
          <li id="cv"><button>Currículo</button></li>
        </ul>

        <input type="checkbox" id="ham" />

        <label htmlFor="ham" className="hamburger">
          <div id="s1"></div>
          <div id="s2"></div>
          <div id="s3"></div>
        </label>
        
      </nav>
    );
  }
  
  export default Nav;