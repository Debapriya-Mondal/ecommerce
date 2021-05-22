import React, { Component } from "react";
import { Grid, Card } from "../../Card";
import Banner from "../../Banner/Banner";
import "./Products.css";
import { getProducts, saveProducts } from "../../../Services/productService";
import {
  cartProducts as cartProduct,
  addToCart,
} from "../../../Services/cartService";
class Products extends Component {
  state = { products: [], cartProducts: [] };
  async componentDidMount() {
    const products = await getProducts();
    const cartProducts = await cartProduct();
    this.setState({ products: products, cartProducts });
  }

  handleCartProduct = async (product) => {
    const cartProducts = [...this.state.cartProducts];
    const products = [...this.state.products];
    const cartFound = cartProducts.find((p) => p._id === product._id);
    const productFound = products.find((p) => p._id === product._id);
    const productIndex = products.indexOf(productFound);
    products[productIndex] = {
      ...productFound,
      inStock: productFound.inStock - 1,
    };
    if (cartFound) {
      const index = cartProducts.indexOf(cartFound);
      cartProducts[index] = { ...cartFound, count: cartFound.count + 1 };
    } else {
      cartProducts.push(product);
    }
    this.setState({ cartProducts, products });
    addToCart(this.state.cartProducts);
    saveProducts(this.state.products);
    //console.log(this.state.cartProducts);
  };
  render() {
    return (
      <>
        <Banner name="Products" />
        <div className="container">
          <Grid>
            {this.state.products.map((product) => (
              <Card
                key={product._id}
                id={product._id}
                flag={false}
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

export default Products;
