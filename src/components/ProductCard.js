import styled from "styled-components";
import { Link } from "react-router-dom";

export default function ProductCard({ title, price, image, id }) {
  let exihibitTitle = "";
  if (title.length > 30) {
    exihibitTitle = title.slice(0, 31) + "...";
  } else {
    exihibitTitle = title;
  }
  return (
    <ProductCardContainer>
      <StyledLink to={`/products/${id}`}>
        <img src={image.src} alt={image.alt} />
        <h3>{exihibitTitle}</h3>
        <h4>{`R$ ${price}`}</h4>
      </StyledLink>
    </ProductCardContainer>
  );
}

const ProductCardContainer = styled.div`
  width: 155px;
  height: 245px;
  padding: 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;

  img {
    width: 100%;
    margin-bottom: 5px;
  }

  h3,
  h4 {
    color: var(--black);
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.2px;
    margin-bottom: 7px;
    text-align: center;
  }

  h4 {
    font-weight: bold;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: none;
`;
