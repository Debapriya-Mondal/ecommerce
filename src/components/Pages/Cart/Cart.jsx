import React, { Component } from "react";
import { Grid, Card } from "../../Card";
import Banner from "../../Banner/Banner";
import "./Cart.css";
import { cartProducts, saveCart } from "../../../Services/cartService";
import { updateInProductOnClear } from "../../../Services/productService";
import { Link } from "react-router-dom";

class Cart extends Component {
  state = { Products: [] };
  async componentDidMount() {
    const Products = await cartProducts();
    this.setState({ Products });
  }
  handelRemove = (id) => {
    updateInProductOnClear(this.state.Products);
    const Product = this.state.Products.filter((p) => p._id !== id);
    this.setState({ Products: Product });
    saveCart(this.state.Products);
  };
  handelClear = () => {
    updateInProductOnClear(this.state.Products);
    const Products = [];
    this.setState({ Products });
  };
  render() {
    return (
      <>
        <Banner name="Cart" />
        <div className="container">
          <Grid>
            {this.state.Products.map((product) => (
              <Card
                key={product._id}
                id={product._id}
                flag={true}
                productName={product.productName}
                Price={product.Price}
                inStock={product.count}
                shortDescription={product.shortDescription}
                onRemove={this.handelRemove}
              />
            ))}
          </Grid>
          {this.state.Products.length !== 0 ? (
            <>
              <div className="footerContent">
                <button className="btn clear" onClick={this.handelClear}>
                  Clear
                </button>
                <Link
                  to="/checkout"
                  className="btn checkOut"
                  style={{ textDecoration: "none" }}
                >
                  Check Out
                </Link>
              </div>
            </>
          ) : (
            <p className="message">No Products in cart</p>
          )}
        </div>
      </>
    );
  }
}

export default Cart;
