import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBarra = () => {
  const usuarioNome = localStorage.getItem("userName")
  return (
    <div>
        <Navbar expand="lg" bg="success" data-bs-theme="dark">
        <Container>
            <span className="material-symbols-outlined" 
            style ={{ fontSize: "40px", color:"white"}}> 
            store
            </span>

            {/* texto logo */}
            <Navbar.Brand href="/home">PG MERCADORIAS</Navbar.Brand>

           <Navbar.Toggle aria-controls="minha-nav"/>
           <Navbar.Collapse id="minha-nav">
            {/* PAGINAS */}
           
          <Nav className="me-auto">
            <Nav.Link href="/home" className="active">PRODUTOS</Nav.Link>
            <Nav.Link href="/produto/cadastrar">CADASTRO</Nav.Link>
          </Nav>
          {/* SAIR */}
          <Nav className="justify-content-end">
            <Navbar.Text style={{color:"white"}}>
              USUÁRIO: {usuarioNome}
            </Navbar.Text>
            <Nav.Link href="/login">SAIR</Nav.Link>
          </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default NavBarra
