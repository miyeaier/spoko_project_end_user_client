import React, { useState, useEffect } from "react";
import { Card, Item ,Container,List} from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [orderInProgress, setOrderInProgress] = useState(false);
  const fetchProducts = async () => {
    const response = await axios.get("https://reqres.in/api/products");
    setProducts(response.data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToOrder = async (id) => {
    const toastSetting = { autoClose: 1500, toastId: "message-box" };
    if (orderInProgress === false) {
      const response = await axios.post("https://reqres.in/api/orders", {
        params: { product_id: id },
      });
      setOrderInProgress(true);
      toast(response.data.message, toastSetting);
    } else {
      const response = await axios.put("https://reqres.in/api/orders", {
        params: { order_id: 1, product_id: id },
      });
      toast(response.data.message, toastSetting);
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
          order +
        </button>
        </Item.Content>
      </Card>
  
  );
    
});
  return(
  <>
  <Container>
    <List inverted id="products-list" size="big">
      {productlist}
    </List>
  </Container>
  <ToastContainer data-cy="message-box" />
</>
  )}


export default Products;
