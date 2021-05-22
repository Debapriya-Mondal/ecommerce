import React, { Component } from "react";
import { cartProducts } from "../../../Services/cartService";
import Banner from "../../Banner/Banner";
import "./checkOut.css";
class checkOut extends Component {
  state = { Products: [] };
  async componentDidMount() {
    this.setState({ Products: await cartProducts() });
  }
  render() {
    console.log(this.state.Products);
    return (
      <>
        <Banner name={"Check Out"} />
        <div className="container"></div>
      </>
    );
  }
}

export default checkOut;
