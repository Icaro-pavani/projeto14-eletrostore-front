import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";

import Header from "./Header";
import OrderList from "./OrderList";
import UserInfoContext from "../context/UserInfoContext";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);

  const { token } = useContext(UserInfoContext);

  const URL_ORDERS = "https://eletrostore-api.herokuapp.com/orders";

  const navigate = useNavigate();

  useEffect(() => {
    const promise = axios.get(URL_ORDERS, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    promise.then(({ data }) => setOrders([...data]));
    promise.catch((error) => console.log(error.response));
  }, [token]);

  return (
    <MyOrdersContainer>
      <Header />
      <Top>
        <IoIosArrowBack className="menu-icon" onClick={() => navigate(-1)} />
        <h1 className="menu">Meus Pedidos</h1>
      </Top>
      <Orders>
        {orders.map((order, index) => (
          <OrderList key={index} order={order} />
        ))}
      </Orders>
    </MyOrdersContainer>
  );
}

const MyOrdersContainer = styled.div`
  width: 100%;
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

const Orders = styled.ul`
  width: 100%;
  border-bottom: 1px solid var(--dark-grey);
`;
