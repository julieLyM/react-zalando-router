import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="product-container">
      <Link to={`/product/${product.id}`}>
        {" "}
        <div className="product">
          <img className="img" src={product.image} alt="liste produits" />
        </div>
      </Link>
    </div>
  );
};

export default Product;
