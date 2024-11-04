import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Products/Product.css";


export const Product = ({ product }) => {
  return (
    <div className="card shadow-sm">
      <img src={product.image} className="card-img-top" alt={product.productName} />
      <div className="card-body">
        <h5 className="card-title">
          {product.productName}
          </h5>
        <p className="card-text">
          <strong>Price:</strong> ${product.price}
        </p>
      </div>
    </div>
  );
};
