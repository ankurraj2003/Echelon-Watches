import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img src={image[0]} alt={name}></img>
      </div>
      <p className="pt-3 pb-1 text-m text-center">{name}</p>
      <p className="text-m font-mediumv text-green-500 font-sans text-center">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
