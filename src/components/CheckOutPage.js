import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import axios from "axios";

import Header from "./Header";
import ProductLine from "./ProductLine";
import { useNavigate } from "react-router-dom";

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
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState({});
  const [payment, setPayment] = useState("");

  const navigate = useNavigate();

  let total = 0;
  products.forEach((product) => {
    total += parseFloat(product.price.replace(",", "."));
  });

  function cepMask(value) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d{3})/, "$1-$2")
      .replace(/(-\d{3})\d+?$/, "$1");
  }

  function getAdress(event) {
    event.preventDefault();
    const URL_ADRESS = `https://viacep.com.br/ws/${cep}/json/`;
    const promise = axios.get(URL_ADRESS);
    promise.then(({ data }) => {
      const { cep, logradouro, bairro, localidade, uf } = data;
      setAddress((prevState) => ({
        ...prevState,
        cep,
        logradouro,
        bairro,
        localidade,
        uf,
      }));
    });
    promise.catch((error) => alert("Invalid CEP!"));
  }

  function updateAddress(event) {
    const { name, value } = event.target;
    setAddress((prevState) => ({ ...prevState, [name]: value }));
  }

  function sendOrderConfirmation() {
    console.log({ products, address, payment });
    navigate("/order-confirmation", { state: { products, address, payment } });
  }

  return (
    <CheckOutContainer>
      <Header />
      <Top>
        <IoIosArrowBack className="menu-icon" onClick={() => navigate(-1)} />
        <h1 className="menu">Finalizar Compra</h1>
      </Top>
      <ProductsList>
        {products.map((product, index) => (
          <ProductLine key={index} product={product} />
        ))}
        <p className="total">Total: R$ {total.toFixed(2).replace(".", ",")}</p>
      </ProductsList>
      {address.logradouro ? (
        <>
          <h2>Endereço de entrega:</h2>
          <Adress onChange={updateAddress}>
            <p>{address.logradouro + ","}</p>
            <StyledInput>
              <input type="text" name="numero" placeholder="Número" required />
              <p>, </p>
              <input
                type="text"
                name="complemento"
                placeholder="Complemento"
                required
              />
            </StyledInput>
            <p>Bairro: {address.bairro}</p>
            <p>Cidade: {address.localidade + "/" + address.uf}</p>
          </Adress>
          <h2>Forma de pagamento:</h2>
          <Payment onChange={(event) => setPayment(event.target.value)}>
            <input
              type="radio"
              id="payment1"
              name="payment"
              value="Cartão de crédito parcelado"
            />
            <label htmlFor="payment1">Parcelado no cartão de crédito</label>
            <br />
            <input
              type="radio"
              id="payment2"
              name="payment"
              value="Cartão de crédito à vista"
            />
            <label htmlFor="payment2">À vista no cartão de crédito</label>
            <br />
            <input
              type="radio"
              id="payment3"
              name="payment"
              value="Cartão de débito à vista"
            />
            <label htmlFor="payment3">À vista no cartão de débito</label>
            <br />
            <input
              type="radio"
              id="payment4"
              name="payment"
              value="Boleto à vista"
            />
            <label htmlFor="payment4">À vista no Boleto</label>
            <br />
          </Payment>
          <button onClick={sendOrderConfirmation}>Concluir Compra</button>
        </>
      ) : (
        <>
          <h2>Endereço de entrega:</h2>
          <CEP onSubmit={getAdress}>
            <input
              type="text"
              name="cep"
              onChange={(event) => {
                event.target.value = cepMask(event.target.value);
                setCep(event.target.value);
              }}
              placeholder="Digite seu CEP"
              value={cep}
              required
            />
            <button type="submit">OK</button>
          </CEP>
        </>
      )}
    </CheckOutContainer>
  );
}

const CheckOutContainer = styled.div`
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

const CEP = styled.form`
  width: 100%;
  padding-left: 20px;
  display: flex;

  input {
    font-family: "DM Sans", sans-serif;
    height: 35px;
    margin-right: 10px;
    font-size: 16px;
    border-radius: 15px;
    padding-left: 15px;
  }

  button {
    margin: 0;
    width: 40px;
    height: 35px;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    color: #fff;
    background-color: var(--blue);
    border-radius: 10px;
  }
`;

const Adress = styled.form`
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

const StyledInput = styled.div`
  width: 100%;
  display: flex;

  p {
    margin-right: 20px;
  }

  input {
    width: 100px;
    height: 30px;
    font-family: "DM Sans", sans-serif;
    margin-right: 5px;
  }
`;

const Payment = styled.form`
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