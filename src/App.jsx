import React from "react";
import Products from "./components/Products";
const App = () => {
  return (
    <>
     <h1 data-cy="name">Spoko</h1>
     <div data-cy="products-list">
        <Products />
      </div>
     </>
  );
};

export default App;
