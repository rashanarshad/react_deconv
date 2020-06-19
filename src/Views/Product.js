import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { useAxiosGet } from "../Hooks/Httpsrequests";
function Product() {
  const { id } = useParams();
  const url = `https://5eead1beb13d0a00164e4bbe.mockapi.io/products/${id}`;
  let product = useAxiosGet(url);
  let content = null;

  if (product.error) {
    content = <p> There was an error, try again or something</p>;
  }
  if (product.loading) {
    content = <Loader></Loader>;
  }
  if (product.data) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
        <div>
          <img src={product.data.images[0].imageUrl} alt={product.data.name} />
        </div>
        <div className="font-bold text-xl mb-3"> ${product.data.price}</div>
        <div> {product.data.description}</div>
      </div>
    );
  }

  return content;
}

export default Product;
