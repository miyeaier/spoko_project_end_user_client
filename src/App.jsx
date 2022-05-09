import React from "react";
import Nav_bar from "./Components/Nav_bar.jsx";
import Header_image from "./Components/Header_image";
import Articles from "./Components/Articles";
import Products from "./Components/Products";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer.jsx";

const App = () => {
  return (
    <>
      <Header_image title="NewsChannel" subTitle="Latest Updates" />
      <Nav_bar />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
