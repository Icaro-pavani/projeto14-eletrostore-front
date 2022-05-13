import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";

export default function Menu({ name, email }) {
  return (
    <MenuContainer>
      <Header>
        <IoIosArrowBack className="menu-icon" />
        <h1>Menu</h1>
      </Header>
      <p className="name">{name}</p>
      <p className="email">{email}</p>
      <FilterContainer>
        <h2>Filtros</h2>
      </FilterContainer>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  width: 300px;
  height: calc(100vh - 50px);
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 2;
  background-color: #fff;

  h1 {
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;
    margin: 0;
    width: 100%;
    text-align: center;
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
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  height: 55px;
  margin-bottom: 30px;
  padding: 0 24px;

  .menu-icon {
    font-size: 24px;
  }
`;

const FilterContainer = styled.div`
  width: 100%;

  h2 {
    margin: 0;
    height: 60px;
    display: flex;
    align-items: center;
    border-top: 1px solid var(--grey);
    padding-left: 24px;
  }
`;
