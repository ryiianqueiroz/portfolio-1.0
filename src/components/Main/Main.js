import "./Main.css"
import Mouse from "../../assets/mouse.png"
import Arrow from "../../assets/down-arrow.png"

function Main() {
    return (
      <main>
        <div className="main-principal">
          <p>Olá, me chamo</p>
          <h1>Ryan Queiroz.</h1>
          <h3>Desenvolvedor Front - End</h3>
          <p>Gosto de criar interfaces bonitas e intuitivas que oferecem uma boa experiência e usabilidade aos usuários.</p>
          <p>Atualmente sou Desenvolvedor Freelancer React, venho criando novos projetos para demonstrar minha capacidade no que gosto de trabalhar.</p>
          <div className="bottom-main">
            <button>Me Contate</button>
            <h3><img src={Mouse} alt="mouse"/> Role para baixo <img src={Arrow} alt="arrow-down"/></h3>
          </div>
        </div>
      </main>
    );
  }
  
  export default Main;