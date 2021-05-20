import React, { Component } from "react";
import { Grid, Card } from "../../Card";
import Banner from "../../Banner/Banner";
import "./Cart.css";
import { cartProducts } from "../../../Services/cartService";
import { getCartProductById } from "../../../Services/cartService";

class Cart extends Component {
  state = { Products: [] };
  async componentDidMount() {
    const Products = await cartProducts();
    this.setState({ Products });
  }
  handleCartProduct = async (id) => {
    const Product = await getCartProductById(id);
    const Products = [...this.state.Products];
    const index = Products.indexOf(Product);
    Products[index] = { ...Product, inStock: Product.inStock + 1 };
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
                flag={true}
                productName={product.productName}
                Price={product.Price}
                inStock={product.inStock}
                shortDescription={product.shortDescription}
                onCartProduct={this.handleCartProduct}
              />
            ))}
          </Grid>
        </div>
      </>
    );
  }
}

export default Cart;
