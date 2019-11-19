import React, { Component } from "react";
import axios from "axios";
import Product from "./Product";
import "./ProductsList.css";

export default class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  async fetchProducts() {
    const { data: products } = await axios.get(
      `https://gist.githubusercontent.com/stackerine/e99122e7548d02446698d04b996475f0/raw/b1b3bc9f788fd06900863f4c8350159637d209c5/products.json`
    );
    this.setState({
      products
    });
  }

  render() {
    return (
      <div className="grid-container">
        {this.state.products.map(product => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    );
  }
}
