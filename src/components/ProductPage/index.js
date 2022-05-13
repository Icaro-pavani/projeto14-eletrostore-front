﻿import { useEffect, useState, useContext } from "react";

import { Link, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack as ArrowIcon } from "react-icons/io";
import { FiShoppingCart as CartIcon } from "react-icons/fi";
import styled from "styled-components";
import axios from "axios";

import ProductDataContext from "../../context/ProductDataContext";
import UserInfoContext from "../../context/UserInfoContext";
import TabsComponent from "./TabsComponent";

import eletroStore from "../../assets/images/eletrostore-no-bg.svg";

export default function ProductPage() {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    description: "",
    amount: 0,
    images: [],
    categories: [],
  });

  const { token, setToken } = useContext(UserInfoContext);
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const localToken = localStorage.getItem("token");

    const setLocalToken = async () => {
      await setToken(localToken);
      checkSession();
    };

    if (localToken && !token) {
      setLocalToken();
    }
  }, []); //eslint-disable-line
  useEffect(() => getProduct(), []); // eslint-disable-line

  function checkSession() {
    if (!token) {
      navigate("/");
      alert("⚠ Session expired!");
    }
  }

  async function getProduct() {
    const API_URL = `https://eletrostore-api.herokuapp.com/products/${productId}`;
    // const API_URL = `http://localhost:5000/products/${productId}`;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const product = await axios.get(API_URL, config);
      console.log("product: ", product);
      setProductData(product.data);
    } catch (e) {
      console.error("⚠ Couldn`t get product! ", e);
    }
  }

  return (
    <>
      <Header>
        <HomeLink to="/">
          <img src={eletroStore} alt="EletroStore logo" />
        </HomeLink>
      </Header>
      <ProductPageComponent>
        <span className="topBar">
          <ArrowIcon className="arrowIcon" />
          <CartIcon className="cartIcon" />
        </span>

        <h1>{productData.name ? productData.name.toUpperCase() : ""}</h1>

        <ProductDataContext.Provider value={{ productData }}>
          <TabsComponent />
        </ProductDataContext.Provider>
        <AddToCartButton type="button">Adicionar ao carrinho</AddToCartButton>

        <section className="otherProducts"></section>
      </ProductPageComponent>
    </>
  );
}

const Header = styled.header`
  height: 2.75rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--dark-blue);
`;

const ProductPageComponent = styled.section`
  background-color: #fff;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .topBar {
    height: 2.75rem;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;

    .arrowIcon,
    .cartIcon {
      font-size: 1.5rem;
      color: var(--black);
    }
  }

  h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 1.75rem;

    align-self: flex-start;
    justify-self: center;

    margin: 1.75rem 1rem 0;
  }
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  outline: none;

  img {
    height: 2.5rem;
    background-repeat: no-repeat;
  }
`;

const AddToCartButton = styled.button`
  width: 90%;
  height: 2.5rem;
  margin-bottom: 3.75rem;

  border-radius: 0.625rem;
  border: none;

  color: #fff;
  line-height: 1.75rem;

  background-color: var(--blue);

  cursor: pointer;
`;
