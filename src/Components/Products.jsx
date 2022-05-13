import React, { useState, useEffect } from "react";
import { Card, Item, Container, List } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import ReviewOrder from "./ReviewOrder";
import store from "../state/store/configureStore";
import { useSelector } from "react-redux";

const Products = () => {
  const { order } = useSelector((state) => state);
  const { dispatch } = store;
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get("https:reqres.in/api/products");
    setProducts(response.data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToOrder = async (id) => {
    // const toastSetting = { autoClose: 1500, toastId: "message-box" };
    if (!order.id) {
      const response = await axios.post("https://reqres.in/api/orders", {
        params: { product_id: id },
      });
      dispatch({ type: "SET_ORDER", payload: response.data.order });
      toast(response.data.message, { toastId: "message-box-order-create" });
    } else {
      const response = await axios.put("https://reqres.in/api/orders", {
        params: { order_id: order.id, product_id: id },
      });
      dispatch({ type: "SET_ORDER", payload: response.data.order });
      toast(response.data.message, { toastId: "message-box-order-update" });
    }
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
