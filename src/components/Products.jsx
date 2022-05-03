import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get("https://reqres.in/api/products");
    setProducts(response.data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const productList =
    products.map(
      (product) => {
        return (
          <div key={product.id}>
            {product.name} -{`${product.price}kr`}
          </div>
        );
      }
    );


return (
  <div data-cy="ProductList">{productList}</div>
)
};

export default Products;
