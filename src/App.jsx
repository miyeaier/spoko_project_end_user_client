import React from "react";
import Products from "./components/Products";
import Header from "./components/Header";

const App = () => {

  return (
    <div data-cy="products-list">
      <Header />
      <Products />
    </div>
  );
};

export default App;
