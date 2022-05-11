import styled from "styled-components";

import EletroStore2 from "./../assets/images/EletroStore2.svg";

export default function Header() {
  return (
    <HeaderContainer>
      <img src={EletroStore2} alt="Store Logo" />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  height: 50px;
  background-color: var(--dark-blue);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 80%;
  }
`;
