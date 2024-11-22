import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";


import NavBarra from "../components/NavBarra";
const EditarProduto = () => {
 //  LISTA CATEGORIAS
 const cats = [
    { id: 1, nome: "CAMISAS" },
    { id: 2, nome: "TENIS" },
    { id: 3, nome: "BERMUDAS" },
    { id: 4, nome: "BAGS" },
    { id: 5, nome: "BONES" },
    { id: 4, nome: "MOLETONS" },
    { id: 5, nome: "COLETES" },
  ];
//   link produto sem imagem
  const linkImagem = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB6U_TlFzYnAfGQZBR1AlsW0GqSOc8pXui7Q&s"

 


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
