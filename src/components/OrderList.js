import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function OrderList({ order }) {
  const navigate = useNavigate();

  return (
    <OrderListContainer>
      <p>{order.date.replace("-", "")}</p>
      <p className="id">{order._id}</p>
      <button onClick={() => navigate("/order-detail", { state: order })}>
        Detalhes
      </button>
    </OrderListContainer>
  );
}

const OrderListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-top: 1px solid var(--dark-grey);

  p {
    width: 60px;
    height: 70px;
    display: flex;
    align-items: center;
    text-align: center;
    border-right: 1px solid var(--dark-grey);
  }

  .id {
    width: 230px;
    text-align: center;
  }

  button {
    height: 35px;
    border: none;
    border-radius: 10px;
    color: #fff;
    background-color: var(--blue);
  }
`;
