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
const urlProd = "http://localhost:5000/produtos";

const CadastroProduto = () => {
  //Lista com categorias
  const [categorias, setCategorias] = useState([]);
  //UseEffect pra puxar os dados da api
  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch(urlCate);
        const cate = await req.json();
        console.log(cate);
        setCategorias(cate);
      } catch (erro) {
        console.log(erro.message);
      }
    }
    fetchData();
  }, []);

  //Link produto sem imagem
  const linkImagem =
    "https://www.malhariapradense.com.br/wp-content/uploads/2017/08/produto-sem-imagem.png";

  //Variáveis para o produto
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("Eletrônicos");
  const [preco, setPreco] = useState("");
  const [imagemUrl, setImagemUrl] = useState("");

  //Variáveis para o alerta
  const [alertClass, setAlertClass] = useState("mb-3 d-none");
  const [alertMensagem, setAlertMensagem] = useState("");
  const [alertVariant, setAlertVariant] = useState("danger");

  // Criando o navigate
  const navigate = useNavigate();

  //Função pra lidar com o envio dos dados
  const handleSubmit = async (e) => {
    //Previne a página de ser recarregada
    e.preventDefault();

    if (nome != "") {
      if (descricao != "") {
        if (preco != "") {
          const produto = { nome, descricao, categoria, preco, imagemUrl };
          console.log(produto);
          try {
            const req = await fetch(urlProd, {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify(produto),
            });
            const res = req.json();
            console.log(res);
            setAlertClass("mb-3 mt-2");
            setAlertVariant("success");
            setAlertMensagem("Produto cadastrado com sucesso");
            alert("Produto cadastrado com sucesso");
            // navigate("/home");
          } 
          catch (error) {
            console.log(error);
          }
        } 
        else {
          setAlertClass("mb-3 mt-2");
          setAlertMensagem("O campo preço não pode ser vazio");
        }
      } else {
        setAlertClass("mb-3 mt-2");
        setAlertMensagem("O campo descrição não pode ser vazio");
      }
    } else {
      setAlertClass("mb-3 mt-2");
      setAlertMensagem("O campo nome não pode ser vazio");
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
