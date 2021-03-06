import { useState, useContext } from "react";
import { Bars } from "react-loader-spinner";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

import ProductDataContext from "../../context/ProductDataContext";

export default function Product() {
  const [loading] = useState(<Bars />);
  const { productData } = useContext(ProductDataContext);

  return (
    <>
      <ProductImagesComponent>
        {productData
          ? productData.images.map(({ src, alt }) => {
              return src ? <img src={src} alt={alt} key={uuidv4()} /> : loading;
            })
          : loading}
      </ProductImagesComponent>
      <PriceWrapper>
        <Price>
          <p>R$ {productData ? productData.price : "0,00"}</p>
          <small>à vista</small>
        </Price>
        <FowardPrice>
          <small>ou em até 12x de</small>
          <p>
            R${" "}
            {productData?.price
              ? (parseInt(productData.price) / 12)
                  .toFixed(2)
                  .toString()
                  .replace(".", ",")
              : loading}
          </p>
        </FowardPrice>
      </PriceWrapper>
    </>
  );
}

const Price = styled.span`
  display: flex;
  align-items: baseline;

  p {
    color: var(--dark-blue);
    font-weight: 700;
    font-size: 2.5rem;

    line-height: 1.25rem;
    letter-spacing: 0.2px;
    white-space: nowrap;

    text-shadow: 2px 4px 0px rgba(0, 0, 0, 0.4);
  }

  small {
    color: var(--dark-grey);
    font-weight: 700;
    font-size: 1.25rem;

    line-height: 1.25rem;
    letter-spacing: 0.2px;

    margin-left: 0.6px;
  }

  @media (min-width: 750px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const FowardPrice = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 2.19rem;

  p {
    color: var(--dark-blue);
    font-weight: 700;
    font-size: 3.44rem;

    line-height: 3.75rem;
    letter-spacing: 0.2px;
    white-space: nowrap;

    text-shadow: 5px 5px 0px var(--details-yellow);
  }

  small {
    color: var(--black);
    font-weight: 700;
    font-size: 1.25rem;

    line-height: 1.25rem;
    letter-spacing: 0.2px;
  }
`;

const ProductImagesComponent = styled.article`
  height: 25.3rem;
  width: 100%;

  margin: 1.875rem 0 3rem;

  display: flex;
  align-items: center;

  overflow-x: scroll;
  overflow-y: hidden;

  background-color: var(--light-gray);

  @media (max-width: 750px) {
    /* Firefox */
    scrollbar-width: none;

    /* Safari and Chrome */
    &::-webkit-scrollbar {
      display: none;
    }
  }

  img {
    height: inherit;
    margin-right: 1.25rem;

    border-radius: 0.625rem;
  }
`;

const PriceWrapper = styled.div`
  align-self: flex-start;
  margin-right: 1.5rem;

  @media (min-width: 750px) {
    align-self: center;
  }
`;
