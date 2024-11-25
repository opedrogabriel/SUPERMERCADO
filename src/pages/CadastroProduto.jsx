import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import NavBarra from "../components/NavBarra";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const url = "http://localhost:5000/categoria"
const CadastroProduto = () => {

  const [categorias, setCategorias] = useState([])

  


  useEffect(() => {
    async function fectchData() {
      try {
        const req = await fetch(url)
        const cate = await req.json()
        console.log(cate)
        setCategorias(cate)

      }
      catch (erro) {
        console.log(erro.message)

      }
    }
    fectchData()

  }, [])

// link produto sem imagem
const linkImagem =
  "https://www.malhariapradense.com.br/wp-content/uploads/2017/08/produto-sem-imagem.png";

//vairaveis para o produto
const [nome, setNome] = useState("");
const [descricao, setDescricao] = useState("");
const [preco, setPreco] = useState("");
const [imagem, setImagem] = useState("");
const [categoria, setCategoria] = useState("");

//variaveis para alerta
const [alertClass, setAlertClass] = useState("mb-3 d-none");
const [alertMensagem, setAlertMensagem] = useState("");
const [alertVariant, setAlertVariant] = useState("danger");

const navigate = useNavigate();

// funçap pra lidar com regarregamento da pagina
const handleSubmit = async (e) => {
  //previne a pagina de ser regarregada
  e.preventDefault();

  if (nome != "") {
    if (descricao != "") {
      if (preco != "") {
        const produto = { nome, descricao, categoria, preco, imagem };
        console.log(produto);
        alert("PRODUTO CADASTRADO COM SUCESSO");
        navigate("/home");
      } else {
        setAlertClass("mb-3 mt-2");
        setAlertMensagem("O CAMPO DO PREÇO NAO PODE SER VAZIO");
      }
    } else {
      setAlertClass("mb-3 mt-2");
      setAlertMensagem("O CAMPO DO DESCRIÇÃO NAO PODE SER VAZIO");
    }
  } else {
    setAlertClass("mb-3 mt-2");
    setAlertMensagem("O CAMPO DO NOME NAO PODE SER VAZIO");
  }
};

return (
  <div>
    <NavBarra />
    <Container>
      <h1>CADASTRAR PRODUTOS</h1>
      <form className="mt-3" onSubmit={handleSubmit}>
        <Row>
          <Col xs={6}>
            <FloatingLabel
              controlId="floatingInputNome"
              label="NOME"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="DIGITE O NOME DO SEU PRODUTO"
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputD3escricao"
              label="DESCRIÇÃO"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="DIGITE O DESCRICAO DO SEU PRODUTO"
                value={descricao}
                onChange={(e) => {
                  setDescricao(e.target.value);
                }}
              />
            </FloatingLabel>
            <Form.Group controlId="formGridTipo" className="mb-3">
              <Form.Label>TIPO DE PRODUTO</Form.Label>
              <Form.Select
                value={categoria}
                onChange={(e) => {
                  setCategorias(e.target.value);
                }}
              >
                {categorias.map((cat) => (
                  <option key={cat.id} value={cat.nome}>
                    {cat.nome}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <FloatingLabel
              controlId="floatingInputPreco"
              label="PREÇO"
              className="mb-3"
            >
              <Form.Control
                type="number"
                step="0,1"
                placeholder="DIGITE O PREÇO"
                value={preco}
                onChange={(e) => {
                  setPreco(e.target.value);
                }}
              />
            </FloatingLabel>
          </Col>

          <Col xs={6}>
            <Form.Group controlId="formFIleLg" className="mb-3">
              <FloatingLabel
                //   caixinha de imagem
                controlId="floatingInputImage"
                label="ENVIE O LINK DA IMAGEM DO PRODUTO"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="ENVIE O LINK DA IMAGEM DO PRODUTO"
                  value={imagem}
                  onChange={(e) => {
                    setImagem(e.target.value);
                  }}
                />
              </FloatingLabel>
              <Image
                src={imagem == "" ? linkImagem : imagem}
                rounded
                width={300}
                height={300}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* alerta caso haja erro */}
        <Alert variant={alertVariant} className={alertClass}>
          {alertMensagem}
        </Alert>

        {/* botao para enviar o forms de cadastro */}
        <Button variant="primary" size="lg" type="submit">
          CADASTRAR
        </Button>
      </form>
    </Container>
  </div>
);
};

export default CadastroProduto;
