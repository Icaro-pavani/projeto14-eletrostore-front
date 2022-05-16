import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { FiTrash2 as TrashIcon } from "react-icons/fi";
import {
  IoIosArrowBack as ArrowIcon,
  IoIosArrowForward as FowardArrowIcon,
} from "react-icons/io";

import styled from "styled-components";

import UserInfoContext from "../../context/UserInfoContext";
import CartProduct from "./CartProduct";
import Header from "../Header";

export default function Cart() {
  const [sum, setSum] = useState(0);

  const { cart, setCart, cartQuantity, setCartQuantity } =
    useContext(UserInfoContext);
  const navigate = useNavigate();

  useEffect(() => {
    let totalPrice = 0;

    cartQuantity.forEach(({ price, quantity }) => {
      totalPrice += Number(price.replace(",", ".")) * quantity;
    });

    setSum(totalPrice.toFixed(2));
  }, [cartQuantity]);

  function getTotal() {
    let total = 0;
    cartQuantity.forEach(({ quantity }) => {
      total += quantity;
    });
    return total;
  }

  function emptyCart() {
    alert("Oh no, your cart is empty! Let's change that...");
    navigate("/products");
  }

  function clearCart() {
    setCart([]);
    setCartQuantity([]);
  }

  return (
    <>
      <Header />
      <CartComponent>
        <span className="topBar">
          <ArrowIcon onClick={() => navigate(-1)} className="arrowIcon" />
          <TrashIcon onClick={clearCart} className="trashIcon" />
        </span>

        <div className="cartProducts">
          {cart.length > 0
            ? cart.map(({ name, price, amount, images }) => {
                return (
                  <CartProduct
                    key={uuidv4()}
                    title={name}
                    price={price}
                    amount={amount}
                    image={images[0]}
                  />
                );
              })
            : () => emptyCart()}
        </div>

        <footer>
          <span>
            <small>
              Total {getTotal()}
              {getTotal() === 1 ? " item" : " itens"}
            </small>
            <p>R$ {sum}</p>
          </span>
          <FinishButton onClick={() => navigate("/checkout")} type="button">
            Finalizar
            <FowardArrowIcon />
          </FinishButton>
        </footer>
      </CartComponent>
    </>
  );
}

const CartComponent = styled.section`
  min-height: 50.7rem;
  width: 100%;

  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;

  .topBar {
    height: 2.75rem;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 2.5rem;
    margin-top: 0.5rem;

    .arrowIcon,
    .trashIcon {
      font-size: 1.5rem;
      color: var(--black);

      cursor: pointer;
    }
  }

  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;

    padding: 0 1.5rem;

    z-index: 1;

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        font-weight: 700;
      }
    }
  }
`;

const FinishButton = styled.button`
  width: 100%;
  height: 2.5rem;

  margin-bottom: 3.75rem;
  margin-top: 1.5rem;
  padding: 0 1.5rem;

  border-radius: 0.625rem;
  border: none;

  color: #fff;
  line-height: 1.75rem;
  font-weight: 700;

  background-color: var(--blue);

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
`;
