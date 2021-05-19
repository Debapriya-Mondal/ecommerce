import React, { Component } from "react";
import "./addProducts.css";
import Banner from "../../Banner/Banner";
import { addProduct } from "../../../Services/productService";
class addProducts extends Component {
  state = {
    product: {
      productName: "",
      Price: 0.0,
      inStock: 0,
      shortDescription: "",
      Description: "",
    },
  };
  handelChange = ({ target }) => {
    const product = { ...this.state.product };
    product[target.name] = target.value;
    this.setState({ product });
  };
  handelSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    addProduct(this.state.product);
  };
  render() {
    const { productName, Price, inStock, shortDescription, Description } =
      this.state;
    return (
      <>
        <Banner name="Add Products" />
        <form onSubmit={this.handelSubmit}>
          <div className="addProductContainer">
            <p>Product Name:</p>
            <input
              type="text"
              placeholder="Product Name"
              name="productName"
              value={productName}
              onChange={this.handelChange}
            />
            <p>Price:</p>
            <input
              type="text"
              placeholder="Price"
              name="Price"
              value={Price}
              onChange={this.handelChange}
            />
            <p>Availabe in stock:</p>
            <input
              type="text"
              placeholder="Availabe in stock"
              name="inStock"
              value={inStock}
              onChange={this.handelChange}
            />
            <p>Short Description:</p>
            <input
              type="text"
              placeholder="Short Description"
              name="shortDescription"
              value={shortDescription}
              onChange={this.handelChange}
            />
            <p>Description:</p>
            <textarea
              rows="2"
              cols="5"
              name="Description"
              value={Description}
              onChange={this.handelChange}
            />
            <button type="submit">Add</button>
          </div>
        </form>
      </>
    );
  }
}

export default addProducts;
