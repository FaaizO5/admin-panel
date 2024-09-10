import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Components/Home";
import Layout from "./components/Layout";
import Products from "./components/Products";
import ProductProvider from "./contexts/ProductProvider.jsx";
const App = () => {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route exact element={<Home />} path="/" />
            <Route exact element={<Products />} path="/products" />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
};

export default App;
