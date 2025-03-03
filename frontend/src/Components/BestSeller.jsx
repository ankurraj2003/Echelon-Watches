import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      const bestProduct = products.filter((item) => item.bestseller);
      setBestSeller(bestProduct.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"MOST"} text2={"DESIRED"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-400 pb-12">
          Discover the most desired timepieces and collector's favorites — Icons
          of timeless elegance.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bestSeller.map((product) => (
          <div
            className="flex flex-col items-center text-center"
            key={product._id}
          >
            <div className="w-full h-80 bg-white-100 rounded-xl overflow-hidden transition-transform duration-300  hover:scale-110 ">
              <img
                src={product.image[0]}
                alt={product.name}
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="mt-4 font-semibold text-lg w-52">{product.name}</h3>
            <p className="text-green-600 font-sans mt-1">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
