import React from "react";
import Products from "./components/Products";
const App = () => {
  return (
    <div data-cy="products-list">
      <h1 data-cy="name">Spoko</h1>
      <Products />
    </div>
  );
};

export default App;
