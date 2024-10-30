import React, { useContext } from "react";
import { Product } from "./Product";
import { ProductContext } from "../../Context/ProductContext";

export const Products = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="row">
      {products?.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            <Product product={product} />
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};
