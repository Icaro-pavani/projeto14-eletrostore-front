import styled from "styled-components";
// import axios from "axios";
import { IoMenuOutline, IoCartOutline, IoSearchSharp } from "react-icons/io5";

import Header from "./Header";
import ProductCard from "./ProductCard";

export default function MainPage() {
  const num = 2;
  const product = [
    {
      name: `Smart TV LG AI ThinQ 50NANO75SPA LED 4K 50" 100V/240V`,
      price: "3028.90",
      amount: 5,
      description: `A LG é inovação e isso pode ser visto em cada um dos seus produtos tecnológicos, especialmente pensados ​​para que toda a família aproveite mais a vida. Ter uma televisão LG é tirar proveito da mais alta qualidade do mercado.
        Com Smart TV 50NANO75 você poderá acessar os aplicativos onde seu conteúdo favorito está localizado. Além disso, você pode navegar na web, interagir em redes sociais e se divertir com jogos de vídeo.
        
        Eu vivi em 4K
        O número de pixels que oferece é 4 vezes maior do que Full HD, o resultado? Cenas muito mais realistas com um nível incrível de detalhes. Agora você vai conhecer uma aventura imersiva que não deixará de surpreendê-lo.
        
        Um som que o rodeia
        Você sentirá que vem de todas as direções possíveis, o que enriquece a percepção disso. O diálogo de sua série de fim de semana ou a música de seus cantores favoritos assumirá um significado diferente.
        
        Além de assistir TV
        Sua função Screen Share permite duplicar a tela do seu smartphone, tablet ou PC para aparecer na sua TV. Desta forma, você poderá visualizar todo tipo de conteúdo: material audiovisual, documentos de trabalho, e-mails e muito mais.`,
      images: [
        {
          src: "https://http2.mlstatic.com/D_NQ_NP_678936-MLA47631790010_092021-O.webp",
          alt: "Smart TV LG image 1",
        },
        {
          src: "https://http2.mlstatic.com/D_NQ_NP_737407-MLA47631790012_092021-O.webp",
          alt: "Smart TV LG image 2",
        },
      ],
      categories: ["televisão"],
      _id: "j4hjkh325h",
    },
  ];

  return (
    <MainPageContainer>
      <PageTop>
        <Header />
        <NavBar>
          <IoMenuOutline className="nav-icon" />
          <SearchField>
            <input type="text" placeholder="Buscar produto" />
            <IoSearchSharp className="search-icon" />
          </SearchField>
          <IoCartOutline className="nav-icon" />
        </NavBar>
      </PageTop>
      <h2>Olá, User</h2>
      <h1>Do que você precisa hoje?</h1>
      <ProductsContainer>
        <NavProducts num={num}>
          <p>Todos</p>
          <p>Notebooks</p>
          <p>Televisões</p>
          <p>Celulares</p>
        </NavProducts>
        {product.length > 0 ? (
          product.map((prod) => (
            <ProductCard
              title={prod.name}
              price={prod.price}
              image={prod.images[0]}
              id={prod._id}
            />
          ))
        ) : (
          <h5>Não há produtos</h5>
        )}
      </ProductsContainer>
    </MainPageContainer>
  );
}

const MainPageContainer = styled.div`
  width: 100%;

  h1 {
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;
    margin-left: 25px;
    margin-bottom: 40px;
  }

  h2 {
    margin-top: 150px;
    font-size: 16px;
    line-height: 20px;
    margin-left: 25px;
  }
`;

const PageTop = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const NavBar = styled.nav`
  margin-top: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;

  .nav-icon {
    font-size: 24px;
    color: var(--black);
  }
`;

const SearchField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  position: relative;
  top: 0;
  left: 0;

  input {
    height: 34px;
    width: 225px;
    padding-left: 45px;
    border: 1px solid var(--grey);
    border-radius: 10px;
  }

  .search-icon {
    font-size: 20px;
    position: absolute;
    left: 12px;
    color: var(--grey);
  }
`;

const ProductsContainer = styled.div`
  width: 100%;
  background-color: var(--light-gray);
  border-radius: 20px 20px 0 0;
`;

const NavProducts = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-left: 35px;
  margin-bottom: 20px;
  padding-top: 30px;
  overflow-x: auto;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 25px;
    margin-right: 25px;
    font-size: 14px;
    line-height: 20px;
    border-radius: 30px;
    letter-spacing: 0.2px;
    padding: 15px;
  }

  p:nth-child(${(props) => props.num}) {
    background-color: var(--blue);
    color: #fff;
  }
`;
