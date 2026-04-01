import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img src={image[0]} alt={name} loading="eager" fetchpriority="high" width="300" height="400"></img>
      </div>
      <p className="pt-3 pb-1 text-sm md:text-base text-center">{name}</p>
      <p className="text-sm md:text-base font-medium text-green-500 font-sans text-center">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
