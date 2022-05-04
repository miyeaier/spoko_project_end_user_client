import React, { useState, useEffect } from "react";
import { Card, Item } from "semantic-ui-react";
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

  const productlist = products.map((product) => {
    return (
      <Card key={product.id}>
        <Item.Content>
          <Item.Image
            size="tiny"
            src={product.image}
            style={{ height: 200 + "px", width: "auto" }}
          />
          <Item.Header>{product.name}</Item.Header>
          <Item.Meta> {`${product.price}kr`}</Item.Meta>
          <Item.Description>{product.description}</Item.Description>
        </Item.Content>
      </Card>
    );
  });

  return <div data-cy="product-list">{productlist}</div>;
};

export default Products;
