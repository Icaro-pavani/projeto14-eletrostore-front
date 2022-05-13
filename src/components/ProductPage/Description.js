import { useContext } from "react";
import styled from "styled-components";

import ProductDataContext from "../../context/ProductDataContext";

export default function Description() {
  const { productData } = useContext(ProductDataContext);

  console.log("productData: ", productData);

  return (
    <DescriptionComponent>
      <h2>Descrição do Produto</h2>
      <p>{productData ? productData.description : ""}</p>
    </DescriptionComponent>
  );
}

const DescriptionComponent = styled.article`
  text-align: left;

  h2 {
    font-weight: 700;
    line-height: 1.5rem;
    letter-spacing: 0.2px;

    margin-bottom: 0.8125rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.375rem;
    letter-spacing: 0.2px;

    padding-right: 1rem;
  }
`;
