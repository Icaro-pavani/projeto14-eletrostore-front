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
            <input type="text" placeholder="Buscar Produto" />
            <IoSearchSharp className="search-icon" />
          </SearchField>
          <IoCartOutline className="nav-icon" />
        </NavBar>
      </PageTop>
    </MainPageContainer>
  );
}

const MainPageContainer = styled.div`
  width: 100%;
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
