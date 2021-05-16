import React, { Component } from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import "./Products.css";

class Products extends Component {
  state = {};
  render() {
    return (
      <>
        <Banner name="Products" />
        <div className="container">
          <div className="row">
            <div className="col">
              <Cards />
            </div>
            <div className="col">
              <Cards />
            </div>
            <div className="col">
              <Cards />
            </div>
            <div className="col">
              <Cards />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Products;
