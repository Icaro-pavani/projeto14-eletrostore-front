import { useContext } from "react";
import {
  FiTrash2 as TrashIcon,
  FiMinusSquare,
  FiPlusSquare,
} from "react-icons/fi";

import styled from "styled-components";

import UserInfoContext from "../../context/UserInfoContext";

export default function CartProduct({ image, title, price }) {
  const { cart, setCart, cartQuantity, setCartQuantity } =
    useContext(UserInfoContext);

  function handleAmountChange(signal) {
    const product = cartQuantity.find(({ name }) => name === title);
    const arr = cartQuantity.filter((prod) => prod.name !== product.name);

    signal === "+"
      ? setCartQuantity([
          ...arr,
          { ...product, quantity: product.quantity + 1 },
        ])
      : setCartQuantity([
          ...arr,
          { ...product, quantity: product.quantity - 1 },
        ]);
  }

  function removeCartProduct() {
    const product = cartQuantity.find(({ name }) => name === title);
    const arr = cartQuantity.filter((prod) => prod.name !== product.name);

    setCartQuantity([...arr]);

    const cartArr = cart.filter((prod) => prod.name !== product.name);

    setCart([...cartArr]);
  }

  function renderAmount() {
    const product = cartQuantity.find(({ name }) => name === title);
    return product.quantity;
  }

  return (
    <CartProductComponent>
      <img src={image.src} alt={image.alt} />
      <StyledProductInfo>
        <p className="title">{title.slice(0, 35) + "..."}</p>
        <p className="price">R$ {price}</p>
        <span>
          <MinusIcon onClick={() => handleAmountChange("-")} />
          <p>{renderAmount()}</p>
          <PlusIcon onClick={() => handleAmountChange("+")} />
        </span>
        <TrashIcon onClick={removeCartProduct} className="trashIcon" />
      </StyledProductInfo>
    </CartProductComponent>
  );
}

const CartProductComponent = styled.section`
  height: auto;

  display: flex;
  align-items: center;

  > img {
    max-width: 4.2rem;
    object-fit: contain;

    margin: 0.625rem;
  }
`;

const StyledProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  position: relative;
  width: 100%;

  margin-left: 1.5rem;
  margin-bottom: 2.18rem;

  span {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .trashIcon {
    position: absolute;
    right: 0;
    bottom: 0;

    font-size: 1.5rem;
    color: var(--grey);

    cursor: pointer;

    &:hover {
      color: var(--black);
    }
  }
`;

const MinusIcon = styled(FiMinusSquare)`
  font-size: 1.5rem;
  color: var(--grey);
  cursor: pointer;

  &:hover {
    color: var(--black);
  }
`;

const PlusIcon = styled(FiPlusSquare)`
  font-size: 1.5rem;
  color: var(--grey);
  cursor: pointer;

  &:hover {
    color: var(--black);
  }
`;
