import "./App.css";
import logo from "../src/assets/logo.png";
import Form from "./assets/components/Form";
function App() {
  return (
    <>
      <main>
        <img src={logo} alt="" />
        <div className="call-container">
          <h1>Acesse a plataforma</h1>
          <p>
            Faça Login ou registre-se para começar a construir seus projetos
            ainda hoje.
          </p>
        </div>
        <div className="form-container">
          <Form />
        </div>
      </main>
    </>
  );
}

export default App;
