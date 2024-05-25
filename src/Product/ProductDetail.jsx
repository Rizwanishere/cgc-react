import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductItem from "./ProductItem";
import ShouldRender from "../util/ShouldRender";
import myAxios from "../util/axios";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const params = useParams();

  useEffect(() => {
    const id = params.id;
    const path = `/products/${id}`;
    myAxios()
      .get(path)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  },[]);

  return (
    <div className="flex justify-center">
      <ShouldRender when={product}>
        <ProductItem product={product} />
      </ShouldRender>
    </div>
  );
  
}

export default ProductDetail;
