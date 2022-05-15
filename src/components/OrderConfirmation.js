import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import ProductLine from "./ProductLine";

export default function OrderConfirmation() {
  const location = useLocation();

  const { address, payment, cartQuantity } = location.state;

  let total = 0;
  cartQuantity.forEach((product) => {
    total += parseFloat(product.price.replace(",", "."));
  });

  return (
    <OrderContainer>
      <Header />
      <Top>
        <h1 className="menu">Pedido Concluído</h1>
      </Top>
      <ProductsList>
        {cartQuantity.map((product, index) => (
          <ProductLine key={index} product={product} />
        ))}
        <p className="total">Total: R$ {total.toFixed(2).replace(".", ",")}</p>
      </ProductsList>
      <h2>Endereço de entrega:</h2>
      <Adress>
        <p>
          {address.logradouro +
            ", " +
            address.numero +
            ", " +
            address.complemento}
        </p>
        <p>Bairro: {address.bairro}</p>
        <p>Cidade: {address.localidade + "/" + address.uf}</p>
      </Adress>
      <h2>Forma de pagamento:</h2>
      <Payment>
        <p>{payment}</p>
      </Payment>
    </OrderContainer>
  );
}

const OrderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    padding-left: 20px;
    margin-top: 30px;
    margin-bottom: 15px;
  }

  button {
    width: 150px;
    height: 45px;
    margin: 20px auto;
    color: #fff;
    background-color: var(--blue);
    font-family: "DM Sans", sans-serif;
    font-size: 16px;
    border: none;
    border-radius: 10px;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  margin-bottom: 40px;

  h1 {
    font-size: 20px;
    line-height: 25px;
    font-weight: bold;
    width: 200px;
    text-align: center;
    color: var(--blue);
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

const Adress = styled.div`
  width: 90%;
  margin: 0 5%;
  background-color: var(--grey);
  padding: 10px;
  border-radius: 10px;

  p {
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

const Payment = styled.div`
  width: 90%;
  margin: 0 5%;
  background-color: var(--dark-blue);
  padding: 10px;
  border-radius: 10px;
  color: #fff;

  input {
    margin-right: 10px;
    margin-bottom: 5px;
  }
`;
