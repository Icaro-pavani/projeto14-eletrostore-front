import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { IoMenuOutline, IoCartOutline, IoSearchSharp } from "react-icons/io5";

import Header from "./Header";
import ProductCard from "./ProductCard";
import Menu from "./Menu";
import UserInfoContext from "../context/UserInfoContext";

export default function MainPage() {
  const [numCategory, setNumCategory] = useState(1);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState("");
  const [active, setActive] = useState(false);

  const navigate = useNavigate();

  console.log(filter);

  const { token, username, userEmail } = useContext(UserInfoContext);

  const API_URL = "https://eletrostore-api.herokuapp.com/products";

  useEffect(() => {
    function checkSession() {
      if (!token) {
        navigate("/");
        alert("⚠ Session expired!");
      }
    }

    checkSession();

    function updateProducts({ data }) {
      const productsData = [...data];
      if (filter === "menor") {
        productsData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      } else if (filter === "maior") {
        productsData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      }
      setProducts([...productsData]);
    }

    if (!category) {
      const promise = axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      promise.then(updateProducts);
      promise.catch((error) => console.log(error.response.data));
    } else {
      const promise = axios.get(`${API_URL}?category=${category}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      promise.then(updateProducts);
      promise.catch((error) => console.log(error.response.data));
    }
  }, [category, token, navigate, filter]);

  function changeCategory(category, num) {
    setCategory(category);
    setNumCategory(num);
  }

  return (
    <MainPageContainer>
      <PageTop>
        <Header />
        <NavBar>
          <IoMenuOutline className="nav-icon" onClick={() => setActive(true)} />
          <SearchField>
            <input type="text" placeholder="Buscar produto" />
            <IoSearchSharp className="search-icon" />
          </SearchField>
          <IoCartOutline className="nav-icon" />
        </NavBar>
      </PageTop>
      <h2>Olá, {username}</h2>
      <h1>Do que você precisa hoje?</h1>
      <ProductsContainer>
        <NavProducts num={numCategory}>
          <p onClick={() => changeCategory("", 1)}>Todos</p>
          <p onClick={() => changeCategory("notebook", 2)}>Notebooks</p>
          <p onClick={() => changeCategory("televisão", 3)}>Televisões</p>
          <p onClick={() => changeCategory("celular", 4)}>Celulares</p>
        </NavProducts>
        <ProductsCardsContainer>
          {products?.length > 0 ? (
            products.map((prod, index) => (
              <ProductCard
                key={index}
                title={prod.name}
                price={prod.price}
                image={prod.images[0]}
                id={prod._id}
              />
            ))
          ) : (
            <h5>Não há produtos</h5>
          )}
        </ProductsCardsContainer>
      </ProductsContainer>
      <Menu
        name={username}
        email={userEmail}
        setFilter={setFilter}
        setActive={setActive}
        active={active}
      />
    </MainPageContainer>
  );
}

const MainPageContainer = styled.div`
  width: 100%;

  h1 {
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;
    margin-left: 25px;
    margin-bottom: 40px;
  }

  h2 {
    margin-top: 150px;
    font-size: 16px;
    line-height: 20px;
    margin-left: 25px;
  }
`;

const PageTop = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const NavBar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 5%;
  background-color: #fff;

  .nav-icon {
    font-size: 24px;
    color: var(--black);
  }
`;

const SearchField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  position: relative;
  top: 0;
  left: 0;

  input {
    height: 34px;
    width: 225px;
    padding-left: 45px;
    border: 1px solid var(--grey);
    border-radius: 10px;
  }

  .search-icon {
    font-size: 20px;
    position: absolute;
    left: 12px;
    color: var(--grey);
  }
`;

const ProductsContainer = styled.div`
  width: 100%;
  background-color: var(--light-gray);
  border-radius: 20px;
`;

const NavProducts = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-left: 25px;
  margin-bottom: 20px;
  padding-top: 30px;
  overflow-x: auto;

  /* Firefox */
  scrollbar-width: none;

  /* Safari and Chrome */
  &::-webkit-scrollbar {
    display: none;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 25px;
    margin-right: 25px;
    font-size: 14px;
    line-height: 20px;
    border-radius: 30px;
    letter-spacing: 0.2px;
    padding: 15px;
  }

  p:nth-child(${(props) => props.num}) {
    background-color: var(--blue);
    color: #fff;
  }
`;

const ProductsCardsContainer = styled.div`
  width: 100%;
  padding: 0 25px 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
