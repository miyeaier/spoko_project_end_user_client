import React, { useState, useEffect } from "react";
import { Card, Item, Container, List } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import ReviewOrder from './ReviewOrder'

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get("https:reqres.in/api/products");
    setProducts(response.data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const addToOrder = async (id) => {
    const response = await axios.post("https:reqres.in/api/orders", {
      params: { product_id: id },
    });
    toast(response.data.message, { toastId: "message-box" });
    // Need to save order ID here
  };

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
          <button
            data-cy="order-button"
            onClick={() => addToOrder(product.id)}
            className="ui button"
          >
            {" "}
            order +
          </button>
        </Item.Content>
      </Card>
    );
  });
  return (
    <>

      <Container>
        <h1 data-cy="name">Spoko</h1>
        <List inverted data-cy="products-list" size="big">
          {productlist}
        </List>
      </Container>
      <ToastContainer />
      <ReviewOrder />
    </>
  );
};



export default Products;
