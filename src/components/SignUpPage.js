import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import {
  IoPersonOutline,
  IoMailOutline,
  IoLockClosedOutline,
} from "react-icons/io5";
import axios from "axios";
import { Bars } from "react-loader-spinner";

import background from "./../assets/images/background.svg";
import EletroStore from "./../assets/images/EletroStore2.svg";

export default function SignUpPage() {
  const [signUpInfo, setSignUpInfo] = useState({});
  const [disabled, setDisabled] = useState(false);

  const SIGNUP_URL = "https://eletrostore-api.herokuapp.com/sign-up";

  const navigate = useNavigate();

  function updateUserInfo(event) {
    const { name, value } = event.target;
    setSignUpInfo((prevState) => ({ ...prevState, [name]: value }));
  }

  function sendUserInfos(event) {
    event.preventDefault();
    setDisabled(true);

    const promise = axios.post(SIGNUP_URL, signUpInfo);
    promise.then((response) => {
      navigate("/");
    });
    promise.catch((error) => {
      alert(error.response.data);
      setDisabled(false);
    });
  }

  return (
    <SignUpContainer>
      <img src={EletroStore} alt="Eletro Store Logo" />
      <StyledForm onSubmit={sendUserInfos}>
        <InputContainer>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            disabled={disabled}
            onChange={updateUserInfo}
            required
          />
          <IoPersonOutline className="input-icon" />
        </InputContainer>
        <InputContainer>
          <input
            type="email"
            name="email"
            placeholder="Email"
            disabled={disabled}
            onChange={updateUserInfo}
            required
          />
          <IoMailOutline className="input-icon" />
        </InputContainer>
        <InputContainer>
          <input
            type="password"
            name="password"
            placeholder="Senha"
            disabled={disabled}
            onChange={updateUserInfo}
            required
          />
          <IoLockClosedOutline className="input-icon" />
        </InputContainer>
        <InputContainer>
          <input
            type="password"
            name="repeat_password"
            placeholder="Confirmar senha"
            disabled={disabled}
            onChange={updateUserInfo}
            required
          />
          <IoLockClosedOutline className="input-icon" />
        </InputContainer>
        <button type="submit" disabled={disabled}>
          {disabled ? (
            <Bars color="#fff" height={30} width={30} />
          ) : (
            "Cadastrar"
          )}
        </button>
      </StyledForm>
      <p>
        Já possui uma conta? <StyledLink to="/">Entre agora!</StyledLink>
      </p>
    </SignUpContainer>
  );
}

const SignUpContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
  padding: 150px 10% 0;

  img {
    width: 350px;
    margin-bottom: 100px;
  }

  p {
    color: #fff;
    font-family: sans-serif;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
  }
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: none;
    color: #fff;
    background-color: var(--blue);
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 30px;

    transition: all 0.5s;

    &:disabled {
      opacity: 0.8;
    }
  }
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;

  input {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: none;
    padding-left: 35px;
    margin-bottom: 25px;
    font-size: 14px;
    line-height: 20px;

    &:invalid {
      border: 2px solid rgba(255, 0, 0, 0.6);
    }

    &:disabled {
      background-color: var(--disabled-background);
    }
  }

  .input-icon {
    color: var(--grey);
    position: absolute;
    left: 8px;
    top: 10px;
    font-size: 20px;
  }
`;

const StyledLink = styled(Link)`
  color: var(--blue);
  font-weight: bold;
  text-decoration: none;

  transition: all 0.5s;

  &:hover {
    filter: brightness(1.5);
    cursor: pointer;
  }
`;
