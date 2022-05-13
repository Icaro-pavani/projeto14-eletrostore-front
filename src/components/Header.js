import styled from "styled-components";
import { Link } from "react-router-dom";

import EletroStore2 from "./../assets/images/EletroStore2.svg";

export default function Header() {
  return (
    <HeaderContainer>
      <StyledLink to="/">
        <img className="logo" src={EletroStore2} alt="Store Logo" />
      </StyledLink>
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
`;

const StyledLink = styled(Link)`
  height: 100%;

  img.logo {
    height: 80%;
  }
`;
