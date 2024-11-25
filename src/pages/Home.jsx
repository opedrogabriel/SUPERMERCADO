import React from "react";
import  CardProduto from "../components/CardProduto";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";

import NavBarra from "../components/NavBarra";

const Home = () => {
  const [produtos, setProdutos] = useState([])

  const url = "http://localhost:5000/produtos"


  useEffect(() => {
    async function fectchData() {
      try {
        const req = await fetch(url)
        const prods = await req.json()
        console.log(prods)
        setProdutos(prods)

      }
      catch (erro) {
        console.log(erro.message)

      }
    }
    fectchData()

  }, [])
 

  return (
    <div>
      <NavBarra />
      <h1>LISTA DE PRODUTOS</h1>
      <Container>
      <div className="lista-produtos d-flex col-12 gap-2 mt-3 justify-content-center flex-wrap'">
        {/* card com informaçoes fixas */}
        {/* <CardProduto
          id="1"
          nome="BARRA CREW"
          descricao="MELHOR MARCA DE STREETWEAR DO ES"
          preco="199,90"
          categoria="ROUPAS"
          imagemUrl="https://imparskateshop.com.br/wp-content/uploads/2023/11/CAMISETA-BARRA-CREW-LAMA-OFF-WHITE-1-6.jpg"
        /> */}

        {produtos.map((prod) => 
          <CardProduto
            key={prod.id}
            id={prod.id}
            nome={prod.nome}
            descricao={prod.descricao}
            preco={prod.preco}
            categoria={prod.categoria}
            imagemUrl={prod.imagemUrl}
          />
        )}
      </div>
      </Container>
    </div>
  );
};

export default Home;
