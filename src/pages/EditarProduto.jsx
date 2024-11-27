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

//Importação do navigate pra transitar entre páginas
import { useNavigate } from "react-router-dom";

// Url da api
const urlCate = "http://localhost:5000/categorias";

const EditarProduto = () => {
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

  // Código para pegar url atual, jogar em um array, e pedar o ultimo elemento 
  const params = window.location.pathname.split("/")
  const idProd = params[params.length - 1]

  //Buscar as informações do produto
  useEffect(() => {
    async function fetchData() {
      try{
        const req = await fetch(`http://localhost:5000/produtos/${idProd}`)
        const prod = await req.json()
        console.log(prod)
        setNome(prod.nome)
        setDescricao(prod.descricao)
        setCategoria(prod.categoria)
        setPreco(prod.preco)
        setImagemUrl(prod.imagemUrl == "" ? "" : prod.imagemUrl)
      } 
      catch(error){
        console.log(error.message)
      }
    }
    fetchData()
  })


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
            const req = await fetch(`http://localhost:5000/produtos/${idProd}`, {
              method: "PUT",
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
        <h1>EDITAR PRODUTOS</h1>
        <form className="mt-3">
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
                />
              </FloatingLabel>
              <Form.Group controlId="formGridTipo" className="mb-3">
                <Form.Label>TIPO DE PRODUTO</Form.Label>
                <Form.Select>
                  {cats.map((cat) => (
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
                  />
                </FloatingLabel>
                <Image src={linkImagem} rounded width={300} height={300} />

              </Form.Group>
            </Col>
          </Row>

          {/* alerta caso haja erro */}
          <Alert key="danger" variant="danger" >
            IIIIIIIIIIIII DEU ERRO
          </Alert>

          {/* botao para enviar o forms de cadastro */}
          <Button variant="primary" size="lg" type="submit">
            EDITAR
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default EditarProduto
