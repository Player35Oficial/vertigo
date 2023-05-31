import { useState } from "react";
import "./index.css";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
      Olá:  ${email}
      Sua senha é ${password}
    `);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    // console.log(email);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    // console.log(password);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="email">
        <span>E-mail</span>
        <input
          type="text"
          placeholder="Digite seu e-mail"
          id="email"
          value={email}
          onChange={handleEmail}
        />
      </label>

      <label htmlFor="password">
        <div className="password-header">
          <span>Senha</span>
          <span className="forgot">
            <a href="">Esqueceu a senha?</a>
          </span>
        </div>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={handlePassword}
        />
      </label>

      <button type="submit">Entrar</button>

      <p>
        Ainda não tem uma conta?{" "}
        <a href="" className="inscreva-se">
          Inscreva-se
        </a>
      </p>
    </form>
  );
}
