import React, { useState, useContext, useEffect } from "react"; // Import useEffect here!
import { ShopContext } from "../Context/ShopContext";
import ProductItem from "../Components/ProductItem";
const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
    productsCopy = productsCopy.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(String(item.subCategory))
      );
    }
    setFilterProducts(productsCopy);
  };
  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, products, search, showSearch, products]);
  useEffect(() => {
    if (products && products.length > 0) {
      setFilterProducts(products);
    }
  }, [products]);
  useEffect(() => {
    sortProduct();
  }, [sortType]);
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/**filter */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-l flex items-center cursor-pointer gap-2 text-white"
        >
          FILTERS
          <img
            className={`h-6 sm:hidden ${showFilter ? "rotate-180" : ""}`}
            src="/back.svg"
          ></img>
        </p>
        {/**category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          {" "}
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Men"}
                onChange={toggleSubCategory}
              />
              For Him
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Women"}
                onChange={toggleSubCategory}
              />
              For Her
            </p>
          </div>
        </div>
        {/**subcategory filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">SHOP BY BRAND</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"AP"}
                onChange={toggleCategory}
              />
              AUDEMARS PIGUET
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Cartier"}
                onChange={toggleCategory}
              />
              CARTIER
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Rolex"}
                onChange={toggleCategory}
              />{" "}
              ROLEX
            </p>{" "}
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Patek Philippe"}
                onChange={toggleCategory}
              />
              PATEK PHILIPPE
            </p>{" "}
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Richard Mille"}
                onChange={toggleCategory}
              />
              RICHARD MILLE
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Hublot"}
                onChange={toggleCategory}
              />
              HUBLOT
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Jacob & Co"}
                onChange={toggleCategory}
              />
              JACOB & CO
            </p>
          </div>
        </div>
      </div>
      {/**right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <p className="text-gray-400">
            ALL
            <span className="text-gray-200 font-medium ml-3">COLLECTIONS</span>
          </p>
          <select
            onChange={(e) => setSortType(e.target.value)}
            className=" bg-[#111111] border-2 border-gray-400 text-sm px-2"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/**mapproducts */}
        <div className="kanit-light grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-180 gap-4 gap-y-6 mt-14  ">
          {filterProducts.map((item, index) => (
            <div className="transition-transform duration-300  hover:scale-110">
              <ProductItem
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
