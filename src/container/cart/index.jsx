import React, { useReducer } from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { cartReducer } from "../../redux/reducers/cart/cartReducer";

import { Cart } from "./cart";

export const MyCart = () => {
  const [items, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    fetch("https://localhost:44369/api/cart/2")
      .then((data) => data.json())
      .then((json) => {
        console.log(json);
        dispatch({ type: "ADD_PRODUCTS", payload: json });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container fluid="md">
      <Row>
        <Col>
          <h3>My Cart</h3>
        </Col>
      </Row>
      <Card className="p-3">
        <Cart products={items} dispatch={dispatch}></Cart>
      </Card>
    </Container>
  );
};
