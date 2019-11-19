import React, { Component } from "react";
import axios from "axios";
import get from "lodash.get";

export default class ProductsCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {}
    };
  }

  componentDidMount() {
    this.fetchCategory();
  }

  async fetchCategory() {
    const { data } = await axios.get(
      `https://gist.githubusercontent.com/stackerine/e99122e7548d02446698d04b996475f0/raw/b1b3bc9f788fd06900863f4c8350159637d209c5/catalog.json`
    );
    console.log(data);
    console.log(this.props);
    const path = this.props.match.url.replace(/\//g, ".").slice(1);

    console.log(path);

    const products = get(data, path);
    console.log(products);
  }

  getProductsFromCatalog(catalog) {
    const isArray = [];
    const isObjet = {};
    if (isArray(catalog)) return catalog;
    else if (isObjet(catalog))
      return Object.values(catalog).reduce((acc, val) => {
        if (isArray(val)) {
          return [...acc, ...val];
        }
        return [...acc, ...this.getProductsFromCatalog(val)];
      }, []);
  }

  render() {
    return <div></div>;
  }
}
