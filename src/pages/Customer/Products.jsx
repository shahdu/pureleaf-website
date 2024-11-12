import React, { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Product } from "../../components/products/Product"; 
import { ProductContext } from "../../Context/ProductContext";
import { CategoryContext } from "../../Context/CategoryContext";

export const Products = () => {
  const { data, isLoading, error } = useContext(ProductContext);
  const { selectedCategoryId } = useContext(CategoryContext);
  console.log("Selected category@:", selectedCategoryId);

  if (isLoading) {
    return (
      <div className="text-center mt-4">
        <p>Loading...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="text-center mt-4">
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }
  const filteredProducts = selectedCategoryId
  ? data.filter((product) => product.category.categoryId === selectedCategoryId)
  : data; 

  return (
    <>
      <div className="container my-4">
        <h2 className="text-center mb-4" style={{ color: '#228B22', fontWeight: 'bold' }}>
          Products
        </h2>
        <div className="row">
          {filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.productId} className="col-md-4 mb-4">
                <Product product={product} />
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No products found</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
