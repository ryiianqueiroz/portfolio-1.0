import "./Nav.css"

function Nav() {
    
  const scrollToBottom = (quant) => {
      window.scrollTo({
        top: quant,
        behavior: 'smooth'
      })
    }  
  
    return (
      <nav>
        <div className="r-flex">
          <span className="r-circle">R</span>
        </div>

        <ul>
          <li onClick={() => scrollToBottom(0)}>Home</li>
          <li onClick={() => scrollToBottom(570)}>Sobre Eu</li>
          <li onClick={() => scrollToBottom(1100)}>Projetos</li>
          <li onClick={() => scrollToBottom(4000)}>Contato</li>
          <li><button>Currículo</button></li>
        </ul>
        
      </nav>
    );
  }
  
  export default Nav;