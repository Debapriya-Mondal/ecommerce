import React, { Component } from "react";
import { Grid, Card } from "../../Card";
import Banner from "../../Banner/Banner";
import "./Products.css";
import { getProducts } from "../../../Services/productService";
class Products extends Component {
  state = { products: [] };
  async componentDidMount() {
    const products = await getProducts();
    this.setState({ products: products });
  }
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
              />
            ))}
          </Grid>
        </div>
      </>
    );
  }
}

export default Products;
