import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import SignUpPage from "./SignUpPage";
import SignInPage from "./SignInPage";

import UserInfoContext from "../context/UserInfoContext";
import GlobalStyle from "../assets/theme/GlobalStyle";

export default function App() {
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");

  const value = { token, setToken, username, setUsername };

  return (
    <>
      <GlobalStyle />
      <UserInfoContext.Provider value={value}>
        <BrowserRouter>
          <Routes>
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
          </Routes>
        </BrowserRouter>
      </UserInfoContext.Provider>
    </>
  );
}
