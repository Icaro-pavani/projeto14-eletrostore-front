import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMailOutline, IoLockClosedOutline } from "react-icons/io5";

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

  const { setToken, setUsername } = useContext(UserInfoContext);
  const navigate = useNavigate();

  // check if there are any token stored on localStorage
  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
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
    // const API_URL = "http://localhost:5000/sign-in";

    try {
      const response = await axios.post(API_URL, userData);
      const { username, token } = response.data;

      setToken(token);
      setUsername(username);

      localStorage.setItem("token", token);

      navigate("/products");
    } catch (e) {
      console.error("⚠ Failed request! Please, try again later...", e);
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
            placeholder="Senha"
            required
          />
          <IoLockClosedOutline className="input-icon" />
        </InputContainer>

        <button type="submit">Entrar</button>
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
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: none;
    color: #fff;
    background-color: var(--blue);
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 30px;
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
