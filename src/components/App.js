import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import SignUpPage from "./SignUpPage";
import SignInPage from "./SignInPage";

import MainPage from "./MainPage";
import ProductPage from "./ProductPage";
import Cart from "./CartPage";

import UserInfoContext from "../context/UserInfoContext";
import GlobalStyle from "../assets/theme/GlobalStyle";
import CheckOutPage from "./CheckOutPage";
import OrderConfirmation from "./OrderConfirmation";
import MyOrders from "./MyOrders";

export default function App() {
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState([]);

  const value = {
    token,
    setToken,
    username,
    setUsername,
    userEmail,
    setUserEmail,
    cart,
    setCart,
    cartQuantity,
    setCartQuantity,
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
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOutPage />} />
            <Route path="order-confirmation" element={<OrderConfirmation />} />
            <Route path="my-orders" element={<MyOrders />} />
          </Routes>
        </BrowserRouter>
      </UserInfoContext.Provider>
    </>
  );
}
