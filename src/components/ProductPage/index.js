﻿import { useEffect, useState, useContext } from "react";

import { Link, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack as ArrowIcon } from "react-icons/io";
import { IoCartOutline as CartIcon } from "react-icons/io5";
import styled from "styled-components";
import axios from "axios";

import ProductDataContext from "../../context/ProductDataContext";
import UserInfoContext from "../../context/UserInfoContext";
import TabsComponent from "./TabsComponent";
import Header from "../Header";

import ProductCard from "../ProductCard";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    description: "",
    amount: 0,
    images: [],
    categories: [],
  });

  const { token, setToken, cart, setCart, cartQuantity, setCartQuantity } =
    useContext(UserInfoContext);
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
  useEffect(() => {
    window.scrollTo(0, 0);
    getProduct();
  }, [window.location.pathname]); // eslint-disable-line

  function checkSession() {
    if (!token) {
      navigate("/");
      alert("⚠ Session expired!");
    }
  }

  async function getProduct() {
    const PRODUCT_URL = `https://eletrostore-api.herokuapp.com/products/${productId}`;
    const PRODUCTS_URL = `https://eletrostore-api.herokuapp.com/products/`;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      // Fetch main product data
      const product = await axios.get(PRODUCT_URL, config);
      setProductData(product.data);

      // Fetch suggestion products data
      const sugestionProducts = await axios.get(PRODUCTS_URL, config);
      setProducts(sugestionProducts.data);
    } catch (e) {
      console.error("⚠ Couldn`t fetch data! ", e);
    }
  }

  function addToCart() {
    setCart([...cart, productData]);
    setCartQuantity([
      ...cartQuantity,
      {
        name: productData.name,
        price: productData.price,
        quantity: 1,
        image: {
          src: productData.images[0].src,
          alt: productData.images[0].alt,
        },
        productId: productId,
      },
    ]);
    navigate("/cart");
  }

  function getTotal() {
    let total = 0;
    cartQuantity.forEach(({ quantity }) => {
      total += quantity;
    });
    return total;
  }

  return (
    <>
      <Header />
      <ProductPageComponent>
        <span className="topBar">
          <ArrowIcon onClick={() => navigate(-1)} className="arrowIcon" />
          <CartIcon onClick={() => navigate("/cart")} className="cartIcon" />
          {getTotal() > 0 ? (
            <div className="cartProductIndicator">{getTotal()}</div>
          ) : (
            <></>
          )}
        </span>

        <h1>{productData.name ? productData.name.toUpperCase() : ""}</h1>

        <ProductDataContext.Provider value={{ productData }}>
          <TabsComponent />
        </ProductDataContext.Provider>
        <AddToCartButton onClick={addToCart} type="button">
          Adicionar ao carrinho
        </AddToCartButton>

        <ProductSugestions>
          <span>
            <p>Produtos em alta</p>
            <Link to="/products">veja mais</Link>
          </span>
          <div className="sugestions">
            {products ? (
              products
                .map(({ name, price, images, _id }) => {
                  return (
                    <ProductCard
                      title={name.slice(0, 18) + "..."}
                      price={price}
                      image={images[0]}
                      id={_id}
                      key={_id}
                    />
                  );
                })
                .sort((a, b) => Math.random() - 0.5)
            ) : (
              <></>
            )}
          </div>
        </ProductSugestions>
      </ProductPageComponent>
    </>
  );
}

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

    margin-top: 0.5rem;

    position: relative;

    .cartProductIndicator {
      width: 20px;
      height: 20px;

      position: absolute;
      right: 1.8rem;
      top: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;

      background-color: red;
      color: #fff;

      z-index: 2;
    }

    .arrowIcon,
    .cartIcon {
      font-size: 1.5rem;
      color: var(--black);

      cursor: pointer;
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

const ProductSugestions = styled.section`
  width: 100%;
  min-height: 16.57rem;

  padding-bottom: 1.5rem;
  margin-bottom: 2.5rem;

  background-color: var(--light-gray);

  .sugestions {
    display: flex;
    gap: 1rem;
    align-items: center;

    margin-top: 1.5rem;
    padding-left: 1.5rem;

    white-space: nowrap;
    overflow-x: scroll;

    /* Firefox */
    scrollbar-width: none;

    /* Safari and Chrome */
    &::-webkit-scrollbar {
      display: none;
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 1.5rem 1.5rem 0;

    a {
      color: var(--dark-grey);
      font-size: 0.875rem;
    }
  }
`;
