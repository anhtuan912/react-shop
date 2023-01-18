import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import Product from "./pages/Product";

const Main = () => (
  <main>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route
          exact
          path="/shopping-cart"
          element={<ShoppingCart/>}
        />
        <Route
          exact
          path="/checkout"
          element={<Checkout/>}
        />
        <Route
          exact
          path="/wishlist"
          element={<Wishlist/>}
        />
        <Route exact path="/products" element={Product} />
      </Routes>
  </main>
);

export default Main;
