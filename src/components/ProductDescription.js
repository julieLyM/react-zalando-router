import React, { Component } from "react";
import axios from "axios";

export default class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
  }

  componentDidMount() {
    this.fetchProductId();
  }

  async fetchProductId() {
    const { data: products } = await axios.get(
      `https://gist.githubusercontent.com/stackerine/e99122e7548d02446698d04b996475f0/raw/b1b3bc9f788fd06900863f4c8350159637d209c5/products.json`
    );
    const product = products.find(
      element => element.id === this.props.match.params.productId
    );
    this.setState({
      product
    });
    console.log(product);
  }

  render() {
    const { image, section, title, price } = this.state.product;
    return (
      <div>
        <img src={image} alt="description article"></img>
        <p>{section}</p>
        <p>{title}</p>
        <p>{price}</p>
        <button>Ajouter dans le panier</button>
      </div>
    );
  }
}
