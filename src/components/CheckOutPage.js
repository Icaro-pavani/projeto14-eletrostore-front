import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";

import Header from "./Header";
import ProductLine from "./ProductLine";

const products = [
  {
    name: "Notebook Gamer Acer Nitro 5 Intel Core i5-10300H 8GB (GeForce GTX1650 4GB) 512GB SSD W11 15,6” Preto AN515-55-59T4",
    price: "5409,84",
    quantity: 1,
    image: {
      src: "https://http2.mlstatic.com/D_NQ_NP_976051-MLA43117842632_082020-O.webp",
      alt: "Acer Nitro 5 image 1",
    },
    productId: "627b219273d39b45b87c012f",
  },
  {
    name: 'Notebook Lenovo IdeaPad 15IML05 platinum gray 15.6", Intel Core i3 10110U 4GB de RAM 256GB SSD, Intel UHD Graphics 620 1366x768px Windows 11 Home',
    price: "2699,00",
    quantity: 2,
    image: {
      src: "https://http2.mlstatic.com/D_NQ_NP_820566-MLA48452096150_122021-O.webp",
      alt: "Lenovo IdeaPad image 1",
    },
    productId: "627c21a6c7abb5be5a91aef5",
  },
];

export default function CheckOutPage() {
  let total = 0;
  products.forEach((product) => {
    total += parseFloat(product.price.replace(",", "."));
  });
  return (
    <CheckOutContainer>
      <Header />
      <Top>
        <IoIosArrowBack className="menu-icon" />
        <h1 className="menu">Finalizar Compra</h1>
      </Top>
      <ProductsList>
        {products.map((product, index) => (
          <ProductLine key={index} product={product} />
        ))}
        <p className="total">Total: R$ {total.toString().replace(".", ",")}</p>
      </ProductsList>
    </CheckOutContainer>
  );
}

const CheckOutContainer = styled.div`
  width: 100%;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 55px;
  padding-left: 20px;
  margin-bottom: 40px;

  h1 {
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;
    margin-left: calc(50vw - 144px);
    width: 200px;
    text-align: center;
  }

  .menu-icon {
    font-size: 24px;
  }
`;

const ProductsList = styled.ul`
  width: 100%;
  border-top: 1px solid var(--dark-grey);

  .total {
    text-align: right;
    padding-right: 5%;
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
    line-height: 20px;
  }
`;
