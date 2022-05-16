import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserInfoContext from "../context/UserInfoContext";

export default function Menu({ name, email, setFilter, setActive, active }) {
  const { setToken, setUsername, setUserEmail } = useContext(UserInfoContext);

  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    setToken("");
    setUsername("");
    setUserEmail("");
    navigate("/");
  }

  return (
    <MenuContainer active={active}>
      <Header>
        <IoIosArrowBack
          className="menu-icon"
          onClick={() => setActive(false)}
        />
        <h1 className="menu">Menu</h1>
      </Header>
      <p className="name">{name}</p>
      <p className="email">{email}</p>
      <h2 className="my-orders" onClick={() => navigate("/my-orders")}>Meus Pedidos</h2>
      <FilterContainer>
        <h2 className="filters">
          Filtros
        </h2>
        <form onChange={(event) => setFilter({filter: event.target.value})}>
          <input type="radio" id="filter1" name="filter" value="menor" />
          <label htmlFor="filter1">Organizar por menor preço</label>
          <br />
          <input type="radio" id="filter2" name="filter" value="maior" />
          <label htmlFor="filter2">Organizar por maior preço</label>
        </form>
      </FilterContainer>
      <h3 onClick={logout}>Sair</h3>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 300px;
  height: calc(100vh - 50px);
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 2;
  background-color: #fff;
  transform: translateX(${(props) => (props.active ? "0" : "-300px")});

  .my-orders {
    margin: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 24px;
    border-top: 1px solid var(--grey);
  }

  form {
    input {
      font-size: 16px;
      line-height: 20px;
      font-family: "DM Sans", sans-serif;
      margin-left: 24px;
      margin-bottom: 15px;
    }
  }

  .name {
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0.2px;
    color: var(--black);
    margin-left: 24px;
  }

  .email {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.2px;
    color: var(--dark-grey);
    margin-bottom: 40px;
    margin-left: 24px;
  }

  h3 {
    height: 50px;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 40px;
    left: 0;
    width: 100%;
    padding-left: 24px;
    font-size: 18px;
    font-weight: bold;
    line-height: 22px;
    border-top: 1px solid var(--grey);
    border-bottom: 1px solid var(--grey);
  }
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  height: 55px;
  margin-bottom: 30px;
  padding: 0 24px;

  h1.menu {
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;
    margin: 0;
    width: 100%;
    text-align: center;
  }

  .menu-icon {
    font-size: 24px;
  }
`;

const FilterContainer = styled.div`
  width: 100%;

  h2.filters {
    margin: 0;
    height: 60px;
    display: flex;
    align-items: center;
    border-top: 1px solid var(--grey);
    padding-left: 24px;
  }
`;
