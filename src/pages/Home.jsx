import React from "react";
import  CardProduto from "../components/CardProduto";
import Container from "react-bootstrap/Container";

import NavBarra from "../components/NavBarra";

const Home = () => {
  const produtos = [
    {
      id: 1,
      nome: "LAMA",
      descricao: "BARRACREW",
      preco: "199,90",
      categoria: "ROUPAS",
      imagemUrl:
        "https://imparskateshop.com.br/wp-content/uploads/2023/11/CAMISETA-BARRA-CREW-LAMA-OFF-WHITE-1-6.jpg",
    },

    {
      id: 2,
      nome: "AHLMA",
      descricao: "BARRA CREW",
      preco: "199,90",
      categoria: "ROUPAS",
      imagemUrl:
        "https://cdn.awsli.com.br/300x300/787/787834/produto/245965738/camisa-ahlma-off-white-uvjxfkutyq.jpg",
    },
    {
      id: 3,
      nome: "LES VRAIS BRÉSILIENS",
      descricao: "BARRA CREW",
      preco: "199,90",
      categoria: "ROUPAS",
      imagemUrl:
        "https://cdn.awsli.com.br/600x1000/787/787834/produto/282023922/camisa--barra-present--off-white-frente--k3vhyors1d.jpg",
    },
    
  ];

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
