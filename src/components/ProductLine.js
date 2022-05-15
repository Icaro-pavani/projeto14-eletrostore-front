import styled from "styled-components";

export default function ProductLine({ product }) {
  const { name, price, image, quantity } = product;
  return (
    <ProductLineContainer>
      <img src={image.src} alt={image.alt} />
      <p className="description">{name.slice(0, 100) + "..."}</p>
      <p className="quantity">{"Qtde: " + quantity}</p>
      <p className="price">{"R$ " + price}</p>
    </ProductLineContainer>
  );
}

const ProductLineContainer = styled.li`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding: 0 10px;
  border-bottom: 1px solid var(--dark-grey);

  img {
    width: 60px;
  }

  .description {
    width: 150px;
    height: 100%;
    display: flex;
    align-items: center;
    border-left: 1px solid var(--dark-grey);
    border-right: 1px solid var(--dark-grey);
    padding-left: 5px;
  }

  .quantity {
    width: 40px;
    text-align: center;
  }

  .price {
    width: 85px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid var(--dark-grey);
  }
`;
