import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Products/Product.css";
import { useCart } from "../../hooks/useCart";
import Button from '@mui/material/Button';


export const Product = ({ product }) => {
  console.log(product);
  console.log(product.quantity);
  const { addToCart } = useCart();

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

        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ marginTop: '16px' }} 
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

