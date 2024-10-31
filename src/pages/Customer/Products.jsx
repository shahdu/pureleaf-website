import React, { useContext } from "react";
import { Product } from "../../components/products/Product";
import { ProductContext } from "../../Context/ProductContext";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Products = () => {
  const { data, isLoading, error } = useContext(ProductContext);

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

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Products</h2>
      <div className="row">
        {data?.length > 0 ? (
          data.map((product) => (
            <div key={product.productId} className="col-md-4 mb-4">
              <Product product={product} />
              <div className="text-center mt-2">
                <Link
                  to={`/product/${product.productId}`}
                  state={product}
                  className="btn btn-outline-primary"
                >
                  Show Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No products available</p>
          </div>
        )}
      </div>
    </div>
  );
};
