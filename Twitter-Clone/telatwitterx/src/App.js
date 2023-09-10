
import './App.css';
import LogoX from "./imagens/LogoX.jpg"
import LogoG from "./imagens/google-icon.png"
import LogoA from "./imagens/apple-icon.png"

function App() {
  return (
    <div className="App">
        <div className="Container">
          <div className="Header">
          <img src={LogoX} alt="Logo do Twitter" />
          
          <h1> Entrar no X</h1>
          </div>
          
        <div className="Login"> 
            
          <ul>
              <li>
                   <img id="iconeG" src={LogoG} alt="Icone do Google" />
                  <p>Fazer login com o Google</p>
              </li>

              <li>
                  <img id="iconeA" src={LogoA} alt="Icone da Apple" />
                  <p id="textoA">Entrar com Apple</p>
              </li>
                        <br></br>
                      <hr></hr>
              <li className="inputext">
                <label for="login">Celular,e-mail ou nome de usuário</label>
                  <input id="login" type="texto"></input>
              </li>

              <li>
                  <p id="avançar">Avançar</p>
              </li>

              <li className="senha">
                <p>Esqueceu a sua senha ?</p>
              </li>
          </ul>
                  <p id="inscreva-se">Não tem conta ?<a href="#">Inscreva-se</a></p>
         </div>

      </div>

    </div>
  
  );
}

export default App;
