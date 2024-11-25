// importando components do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

// importando o hook usestate para monitorar a mudança das variaveis
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const url = "http://localhost:5000/usuarios"

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [alertClass, setAlertClass] = useState("mb-3 d-none");
  const [alertMensagem, setAlertMensagem] = useState("");
  const [alertVariant, setAlertVariant] = useState("danger");

  

  const [usuarios, setUsuarios] = useState([])


  useEffect(() => {
    async function fectchData() {
      try {
        const req = await fetch(url)
        const users = await req.json()
        console.log(users)
        setUsuarios(users)

      }
      catch (erro) {
        console.log(erro.message)

      }
    }
    fectchData()

  }, [])



  const navigate = useNavigate();

  const gravarLocalStorage = (usuario) => {
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
