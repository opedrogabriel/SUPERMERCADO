// importando components do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

// importando o hook usestate para monitorar a mudança das variaveis
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [alertClass, setAlertClass] = useState("mb-3 d-none");
  const [alertMensagem, setAlertMensagem] = useState("");
  const [alertVariant, setAlertVariant] = useState("danger");

  // lista de usuarios
  const usuarios = [
    { id: 1, nome: "pedro", email: "pedro.gabriel2578@icloud.com", senha: "123" },
    { id: 2, nome: "reubert", email: "seureubert@gmail.com", senha: "1010" },
    { id: 3, nome: "andrez", email: "g.andrez10@gmail.com", senha: "0309" },
    { id: 4, nome: "glauber", email: "glauberbarcellos@gmail.com", senha: "8486" },
    { id: 5, nome: "tiago", email: "otiagobispo@gmail.com", senha: "123456" },
  ]

  const navigate = useNavigate();

  const gravarLocalStorage = (usuario) =>{
    localStorage.setItem("userName", usuario.nome)
    localStorage.setItem("email", usuario.email)
  }

  // função pra tratar os dados de login
  const handleLogin = async (e) => {
    // previne a pagina de ser recaregada
    e.preventDefault();

    const userToFind = usuarios.find((user) => user.email == email);

    if (email != "") {
      if (senha != "") {
        if (userToFind != undefined && userToFind.senha == senha) {
          gravarLocalStorage(userToFind)
          setAlertClass("mb-3 mt-2");
          setAlertVariant("SUCCESS");
          setAlertMensagem("LOGIN EFETUADO COM SUCESSO");
          alert("LOGIN EFETUADO COM SUCESSO");
          navigate("/home")
        } else {
          setAlertClass("mb-3 mt-2");
          setAlertMensagem("USUARIO OU SENHA INVÁLIDOS");
        }
      } else {
        setAlertClass("mb-3 mt-2");
        setAlertMensagem("O CAMPO EMAIL NÃO PODE SER VAZIO");
      }
    } else {
      setAlertClass("mb-3 mt-2");
      setAlertMensagem("O CAMPO SENHA NÃO PODE SER VAZIO");
    }
  };

  return (
    <div
      style={{ background: "aliceblue", height: "100vh" }}
      className="justify-content-center align-content-center"
    >
      <Container>
        {/* Icone de login */}
        <span
          style={{ fontSize: "200px", color: "dodgerblue" }}
          className="material-symbols-outlined"
        >
          login
        </span>
        <Form style={{ width: "75%", margin: "auto" }} onSubmit={handleLogin}>
          {/* Caixinha de email */}
          <FloatingLabel
            controlId="floatingInput"
            label="EMAIL"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </FloatingLabel>

          {/* Caixinha de senha */}
          <FloatingLabel controlId="floatingPassword" label="SENHA">
            <Form.Control
              type="password"
              placeholder="Password"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
              }}
            />
          </FloatingLabel>

          <Alert variant={alertVariant} className={alertClass}>
            {alertMensagem}
          </Alert>

          {/* Botao pra enviar o formulário */}
          <Button variant="primary" type="submit" className="mt-4" size="lg">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
