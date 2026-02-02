import React, { useContext, useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import RelatedProducts from "../Components/RelatedProducts";
import LazyImage from "../Components/LazyImage";

const Product = ({ }) => {
  const { ProductId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const productRef = useRef(null);
  useEffect(() => {
    const product = products.find((item) => item._id === ProductId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
    if (productRef.current) {
      productRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [ProductId, products]); // Added 'products' as a dependency

  return productData ? (
    <div
      ref={productRef}
      className="border-t-2 transition-opacity ease-in duration-500 opacity-100"
    >
      {/** Product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/** Product images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          {/** Thumbnails */}
          <div className="flex sm:flex-col overflow-x-auto overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <div
                onClick={() => setImage(item)}
                key={index}
                className="w-1/6 sm:w-full cursor-pointer product-image"
              >
                <LazyImage
                  src={item}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-contain"
                  containerClassName="w-full aspect-square"
                  priority={true}
                />
              </div>
            ))}
          </div>
          {/** Main Image */}
          <div className="w-full sm:w-[80%]">
            <LazyImage
              src={image}
              alt="Selected Product"
              className="w-full max-h-[60vh] mt-20 h-auto rounded-lg object-contain"
              containerClassName="w-full min-h-[300px]"
              priority={true}
            />
          </div>
        </div>
        {/**product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-4">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-4">
            {" "}
            <img src="/staryellow-Photoroom.png" alt="star" className="w-5" />
            <img
              src="/staryellow-Photoroom.png"
              alt="star"
              className="w-5
              "
            />
            <img src="/staryellow-Photoroom.png" alt="star" className="w-5" />
            <img src="/staryellow-Photoroom.png" alt="star" className="w-5" />
            <img src="/stargrey-Photoroom.png" alt="star" className="w-4" />
          </div>
          <p className="mt-5 text-3xl font-medium font-sans text-green-600">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-400 md:w-4/5">
            {productData.description}
          </p>

          <button
            onClick={() => addToCart(productData._id)}
            type="button"
            className="button mt-6 sm:mt-9"
          >
            <span className="button__text">Add Item</span>
            <span className="button__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                viewBox="0 0 24 24"
                strokeWidth={2}
                strokeLinejoin="round"
                strokeLinecap="round"
                stroke="currentColor"
                height={24}
                fill="none"
                className="svg"
              >
                <line y2={19} y1={5} x2={12} x1={12} />
                <line y2={12} y1={12} x2={19} x1={5} />
              </svg>
            </span>
          </button>
        </div>
      </div>
      {/**description and review */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm"> Product Information</b>
          <p className="border px-5 py-3 text-sm">Reviews (120)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>The details of product will be updated soon.</p>
        </div>
      </div>
      {/**RELATED PRODUCTS */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
