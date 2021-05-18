import React, { Component } from "react";
import { Grid, Card } from "../../Card";
import Banner from "../../Banner/Banner";
import "./Cart.css";

class Cart extends Component {
  state = {};
  render() {
    return (
      <>
        <Banner name="Cart" />
        <div className="container">
          <Grid>
            <Card flag={true} />
            <Card flag={true} />
            <Card flag={true} />
          </Grid>
        </div>
      </>
    );
  }
}

export default Cart;
