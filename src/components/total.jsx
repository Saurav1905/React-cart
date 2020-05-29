import React, { Component } from "react";
import Button from "@material-ui/core/Button";
class Checkout extends Component {
  render() {
    return (
      <div className="lower">
        <h1>Total : ${this.props.total}</h1>
        <h1>Tax : $2</h1>
        <h1>Discount: 50%</h1>
        <Button className="checkout">Proceed To Checkout</Button>
      </div>
    );
  }
}

export default Checkout;
