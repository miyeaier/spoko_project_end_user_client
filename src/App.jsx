import React from "react";
import Products from "./components/Products";
const App = () => {
  return (
    <>
      <div data-cy="name">Spoko</div>
      <div data-cy="products-list">
        <Products />
      </div>
    </>
  );
};

export default App;
