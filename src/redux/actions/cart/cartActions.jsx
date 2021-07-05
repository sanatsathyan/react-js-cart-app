export const handleCheckout = (products) => {
  alert(`You have checked out the following products!
    ${products.map((item) => {
      return "\n" + item.productName + `(${item.quantity} items)`;
    })}
    \nTotal Cost: $${products.reduce((current, item) => {
      return current + item.quantity * item.cost;
    }, 0)}`);
};

export const handleQuantityChange = (dispatch, productId, quantity) => {
  dispatch({
    type: "CHANGE_QUANTITY",
    payload: { productId: productId, quantity: quantity },
  });
};

export const handleDeleteItem = (dispatch, productId) => {
  dispatch({
    type: "DELETE_ITEM",
    payload: { productId: productId },
  });
};
