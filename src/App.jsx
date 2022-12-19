import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart, Home, LogIn, Payment, Shop, Signup, Tracking } from "./container";
import { CartProvider } from "./Context/CartContext";
import { LogInProvider } from "./Context/LogInContext";

const App = () => {
  return (
    <div className="h-auto">
      <LogInProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart/payment" element={<Payment />} />
        </Routes>
      </CartProvider>
      </LogInProvider>
    </div>
  );
};

export default App;
