import React from "react";

const ProductCard = ({ prod }) => {
  return (
    <div className="rounded-md p-5 border border-zinc-200 bg-white text-center">
      <img src={prod.images[0]} alt="Product Image" className="size-50 mx-auto my-2 rounded-lg" />
      <div className="text-xl font-semibold">{prod.title}</div>
      <div className="text-sm text-gray-400 mt-2">{prod.title}</div>
    </div>
  );
};

export default ProductCard;
