"use client";
import React from "react";
import { useEffect, useState } from "react";
import { getData } from "@/utils/ProductsApi";
import ProductCard from "./ProductCard";

function ProductsSection() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getData().then((res) => {
      setProductList(res.data);
    });
  }, []);

  return (
    <div className="p-20 mx-auto">
      <div className="mb-10">
        <h1 className="text-2xl text-center text-primary font-bold">Our Latest Products</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 bg-white">
        {productList.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsSection;
