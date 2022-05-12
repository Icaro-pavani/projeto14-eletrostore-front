import styled from "styled-components";
// import axios from "axios";
import { IoMenuOutline, IoCartOutline, IoSearchSharp } from "react-icons/io5";

import Header from "./Header";

export default function MainPage() {
  return (
    <MainPageContainer>
      <PageTop>
        <Header />
        <NavBar>
          <IoMenuOutline className="nav-icon" />
          <SearchField>
            <input type="text" placeholder="Buscar produto" />
            <IoSearchSharp className="search-icon" />
          </SearchField>
          <IoCartOutline className="nav-icon" />
        </NavBar>
      </PageTop>
      <h2>Olá, User</h2>
      <h1>Do que você precisa hoje?</h1>
      <ProductsContainer>
        <NavProducts>
          <p>Todos</p>
          <p>Notebooks</p>
          <p>Televisões</p>
          <p>Celulares</p>
        </NavProducts>
      </ProductsContainer>
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
  margin-top: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;

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
`;

const NavProducts = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-left: 25px;

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
  }
`;
