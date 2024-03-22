import "./Nav.css"

function Nav() {
    return (
      <nav>
        <div className="r-flex">
          <span className="r-circle">R</span>
        </div>

        <ul>
          <li>Sobre Mim</li>
          <li>Habilidades</li>
          <li>Projetos</li>
          <li>Contato</li>
        </ul>
        
      </nav>
    );
  }
  
  export default Nav;