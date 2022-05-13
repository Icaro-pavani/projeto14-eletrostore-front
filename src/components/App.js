import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import SignUpPage from "./SignUpPage";
import SignInPage from "./SignInPage";

import MainPage from "./MainPage";
import ProductPage from "./ProductPage";

import UserInfoContext from "../context/UserInfoContext";
import GlobalStyle from "../assets/theme/GlobalStyle";

export default function App() {
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const value = {
    token,
    setToken,
    username,
    setUsername,
    userEmail,
    setUserEmail,
  };

  return (
    <>
      <GlobalStyle />
      <UserInfoContext.Provider value={value}>
        <BrowserRouter>
          <Routes>
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/" element={<SignInPage />} />
            <Route path="/products" element={<MainPage />} />
            <Route path="/products/:productId" element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
      </UserInfoContext.Provider>
    </>
  );
}
