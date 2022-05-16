import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMailOutline, IoLockClosedOutline } from "react-icons/io5";
import { Bars } from "react-loader-spinner";

import styled from "styled-components";
import axios from "axios";

import UserInfoContext from "../context/UserInfoContext";

import background from "./../assets/images/background.svg";
import eletroStore from "./../assets/images/EletroStore2.svg";

export default function SignInPage() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(false);

  const { setToken, setUsername, setUserEmail } = useContext(UserInfoContext);
  const navigate = useNavigate();

  // check if there are any token stored on localStorage
  useEffect(() => {
    const localToken = localStorage.getItem("token");
    const localUserInfo = localStorage.getItem("loginInfo");

    if (localToken && localUserInfo) {
      setToken(localToken);
      setUsername(JSON.parse(localUserInfo).username);
      setUserEmail(JSON.parse(localUserInfo).email);
      navigate("/products");
    }
  }, []); //eslint-disable-line

  function handleChange(e) {
    switch (e.target.id) {
      case "emailInput":
        setUserData({ ...userData, email: e.target.value });
        break;

      case "passwordInput":
        setUserData({ ...userData, password: e.target.value });
        break;

      default:
        console.log("Unexpected input!");
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    signIn();
  }

  async function signIn() {
    const API_URL = "https://eletrostore-api.herokuapp.com/sign-in";

    try {
      setDisabled(true);
      const response = await axios.post(API_URL, userData);
      const { username, token } = response.data;

      setToken(token);
      setUsername(username);
      setUserEmail(userData.email);

      const loginObject = JSON.stringify({
        username,
        email: userData.email,
      });
      localStorage.setItem("loginInfo", loginObject);

      localStorage.setItem("token", token);

      navigate("/products");
    } catch (e) {
      console.error(" Failed request! Please, try again later...", e);
      setDisabled(false);
    }
  }

  return (
    <SignInComponent>
      <img src={eletroStore} alt="Eletro Store Logo" />
      <StyledForm onSubmit={handleSubmit}>
        <InputContainer>
          <input
            onChange={handleChange}
            type="email"
            id="emailInput"
            name="email"
            disabled={disabled}
            placeholder="Email"
            required
          />
          <IoMailOutline className="input-icon" />
        </InputContainer>

        <InputContainer>
          <input
            onChange={handleChange}
            type="password"
            id="passwordInput"
            name="password"
            disabled={disabled}
            placeholder="Senha"
            required
          />
          <IoLockClosedOutline className="input-icon" />
        </InputContainer>

        <button type="submit" disabled={disabled}>
          {disabled ? <Bars color="#fff" height={30} width={30} /> : "Entrar"}
        </button>
      </StyledForm>
      <p>
        Não possui uma conta?{" "}
        <StyledLink to="/sign-up">Cadastre-se agora!</StyledLink>
      </p>
    </SignInComponent>
  );
}

const SignInComponent = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${background});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px 10%;

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
`;
