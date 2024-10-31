import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const ProductDetails = () => {
  const navigator = useNavigate();
  const { state } = useLocation();
  return (
    <div>
      <h1>Details</h1>
      <img src={state.image} alt={state.productName} />
      <h2>{state.productName}</h2>
      <p>{state.description}</p>
      <p>
        <strong>Price:</strong> ${state.price}
      </p>
      <button onClick={() => navigator("/products")}>Back To List</button>
    </div>
  );
};
