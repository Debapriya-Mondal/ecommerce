import React, { Component } from "react";
import { Grid, Card } from "../../Card";
import Banner from "../../Banner/Banner";
import "./Products.css";

class Products extends Component {
  state = {};
  render() {
    return (
      <>
        <Banner name="Products" />
        <div className="container">
          <Grid>
            <Card flag={false} />
            <Card flag={false} />
            <Card flag={false} />
          </Grid>
        </div>
      </>
    );
  }
}

export default Products;
