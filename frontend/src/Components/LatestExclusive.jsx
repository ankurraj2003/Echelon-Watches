import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestExclusive = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      setLatestProducts(products.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-400 pb-12">
          Explore our latest collection of luxury timepieces crafted for those
          who appreciate unparalleled craftsmanship.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {latestProducts.map((product, index) => (
          <div
            key={product._id}
            className="p-4 rounded-lg transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          >
            <ProductItem
              id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              priority={index < 4} // First 4 images load with priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestExclusive;
