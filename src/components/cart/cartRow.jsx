import React from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";
import {
  handleDeleteItem,
  handleQuantityChange,
} from "../../redux/actions/cart/cartActions";

import { CartProduct } from "./cartProduct";

export const CartRow = ({ item, dispatch }) => {
  return (
    <Row className="align-items-center">
      <Col lg="6" md="6" sm="6" xs="6">
        <CartProduct
          productName={item.productName}
          productCost={item.cost}
          productImage={item.productImage}
        ></CartProduct>
      </Col>
      <Col lg="2" md="2" sm="2" xs="2">
        <FormControl
          value={item.quantity}
          onChange={(e) =>
            handleQuantityChange(dispatch, item.productId, e.target.value)
          }
          type="number"
          min={1}
          max={9}
          style={{ maxWidth: 64 }}
        ></FormControl>
      </Col>
      <Col lg="2" md="2" sm="2" xs="2">
        <span>${item.cost * item.quantity}</span>
      </Col>
      <Col lg="2" md="2" sm="2" xs="2">
        <Button onClick={() => handleDeleteItem(dispatch, item.productId)}>
          Delete
        </Button>
      </Col>
    </Row>
  );
};
