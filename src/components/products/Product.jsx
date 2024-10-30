import React, { useContext } from "react";

export const Product = ({ product }) => {

  const { id, image, name, price, description } = product;

  return (
    <Card>
      <div className="card-header bg-primary text-white text-center">
        Product
      </div>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Price: {price}</p>
        <p className="card-text">description: {description}</p>
      </div>
      
    </Card>
  );
};
