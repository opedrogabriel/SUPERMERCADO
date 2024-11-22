import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardProduto = (props) => {
  return (
    <div>
       <Card style={{ width: "16rem", heigh:'30rem' }}>

        {/* imagem do card */}
      <Card.Img variant="top" src={props.imagemUrl} height="200px" />

      <Card.Body>
        <Card.Title>{props.nome}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">R$: {props.preco}</Card.Subtitle>
        <br></br>
        <Card.Text>{props.descricao}

        </Card.Text>

        <Card.Link href="/Home">
        <Button variant="warning">EDITAR</Button>
        </Card.Link>
        <Card.Link>
        <Button variant="danger">EXCLUIR</Button>
        </Card.Link>

      </Card.Body>
    </Card>
    </div>
  )
}

export default CardProduto
