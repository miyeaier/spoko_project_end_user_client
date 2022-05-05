import React from "react";
import Nav_bar from "./Components/Nav_bar.jsx";
import Header_image from "./Components/Header_image.jsx";
import Articles from "./Components/Articles.jsx";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer.jsx";

const App = () => {
  return (
    <>
      <Header_image title="NewsChannel" subTitle="Latest Updates" />
      <Nav_bar />
      <Routes>
        <Route path="/" element={<Articles />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
