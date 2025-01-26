import React from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const params = useParams();
  return <h1>productDetails :{params.id}</h1>;
};
