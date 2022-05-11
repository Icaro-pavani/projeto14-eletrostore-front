import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/theme/GlobalStyle";

import SignUpPage from "./SignUpPage";

import UserInfoContext from "../context/UserInfoContext";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <UserInfoContext.Provider value={{}}>
        <BrowserRouter>
          <Routes>
            <Route path="/sign-up" element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </UserInfoContext.Provider>
    </>
  );
}
