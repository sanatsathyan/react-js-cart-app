import React from "react";
import { Row, Col } from "react-bootstrap";

export const CartProduct = ({ productName, productCost, productImage }) => {
  return (
    <Row>
      <Col lg="auto" md="auto" sm="auto" xs="auto">
        <img alt="Product" src={productImage} height={48} width={48} />
      </Col>
      <Col>
        <Row>
          <Col>
            <span>{productName}</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <small>${productCost}</small>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
