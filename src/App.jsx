import React from "react";
import Products from "./components/Products";
import ReviewOrder from "./components/ReviewOrder";

const App = () => {
  return (
    <>
      <h1 id="name">Spoko</h1>
      <div data-cy="products-list">
      <Products />
        <ReviewOrder />
      </div>
    </>
  );
};

export default App;
