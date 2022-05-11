import styled from "styled-components";
// import axios from "axios";

import Header from "./Header";

export default function MainPage() {
  return (
    <MainPageContainer>
      <Header />
    </MainPageContainer>
  );
}

const MainPageContainer = styled.div`
  width: 100%;
`;
