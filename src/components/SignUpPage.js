import styled from "styled-components";

import background from "./../assets/images/background.svg";
import EletroStore from "./../assets/images/EletroStore2.png";

export default function SignUpPage() {
  return (
    <SignUpContainer>
      <img src={EletroStore} alt="Eletro Store Logo" />
      <StyledForm>
        <InputContainer>
          <input type="text" name="name" placeholder="Nome" required />
        </InputContainer>
        <InputContainer>
          <input type="email" name="email" placeholder="Nome" required />
        </InputContainer>
        <InputContainer>
          <input type="password" name="password" placeholder="Nome" required />
        </InputContainer>
        <InputContainer>
          <input
            type="password"
            name="repeat_password"
            placeholder="Nome"
            required
          />
        </InputContainer>
        <button type="submit">Cadastrar</button>
      </StyledForm>
      <p>Já possui uma conta? Entre agora!</p>
    </SignUpContainer>
  );
}

const SignUpContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
`;

const StyledForm = styled.form`
  width: 100%;
`;

const InputContainer = styled.div`
  width: 100%;
`;
