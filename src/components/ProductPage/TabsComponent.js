import { useState } from "react";
import styled from "styled-components";

import Product from "./Product";
import Description from "./Description";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  return (
    <StyledTabs>
      <ul className="nav">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          <p>Produto</p>
          <Slider active={activeTab === "tab1"} />
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          <p>Descrição</p>
          <Slider active={activeTab === "tab2"} />
        </li>
      </ul>
      <div className="outlet">
        {activeTab === "tab1" ? <Product /> : <Description />}
      </div>
    </StyledTabs>
  );
}

const StyledTabs = styled.div`
  width: 100%;
  height: auto;
  min-height: 400px;

  margin: 0 auto 1.5rem;
  padding: 2.5rem 0 2.5rem 1.5rem;
  color: var(--black);
  border-radius: 2rem;

  /* Tab Navigation */
  ul.nav {
    width: 90%;
    margin: 0 auto 2rem;
    padding-right: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
  }

  ul.nav li {
    width: 50%;
    padding: 1rem;
    list-style: none;

    display: flex;
    flex-direction: column;
    align-items: center;

    cursor: pointer;
    transition: all 0.7s;

    border-bottom-left-radius: 2rem;
    border-top-left-radius: 2rem;
  }

  ul.nav li:nth-child(2) {
    border-radius: 0;
    border-bottom-right-radius: 2rem;
    border-top-right-radius: 2rem;
  }

  ul.nav li.active {
    font-weight: 700;
  }

  .outlet {
    display: flex;
    flex-direction: column;
    @media (min-width: 750px) {
      flex-direction: row;
      align-items: center;
      gap: 1.5rem;
    }
  }
`;

const Slider = styled.div`
  visibility: ${(props) => (props.active ? "initial" : "hidden")};
  height: 0.19rem;
  width: 1.5rem;

  margin-top: 0.82rem;

  border: none;
  outline: none;

  background-color: var(--blue);
`;
