import React from "react";
import Nav_bar from "./Components/Nav_bar.jsx";
import Header_image from "./Components/Header_image.jsx";
import Footer from "./Components/Footer.jsx";
Footer;
const App = () => {
  return (
    <>
      <Header_image title="NewsChannel" subTitle="Header subtitle" />
      <Nav_bar />
      <div data-cy="name">Spoko</div>
      <Footer />
    </>
  );
};

export default App;
