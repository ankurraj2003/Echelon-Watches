import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "../Components/Title";
import CartTotal from "../Components/CartTotal";
import "/src/index.css";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        if (cartItems[items] > 0) {
          tempData.push({
            _id: items,
            quantity: cartItems[items],
          });
        }
      }
      setCartData(tempData);
    }
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      {cartData.length === 0 ? (
        <div className="text-center text-gray-500 text-xl py-20">
          <img className=" w-10 h-10 mx-auto mb-4" src="/empty.png"></img>
          Your cart is empty.
        </div>
      ) : (
        <div>
          {cartData.map((item, index) => {
            const productsData = products.find(
              (products) => products._id === item._id
            );
            return (
              <div
                key={index}
                className="py-4 border-t border-gray-500 border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] item-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <img
                    className="w-16 sm:w-20"
                    src={productsData.image[0]}
                    alt="product "
                  />
                  <div>
                    <p className="text-xs sm:text-lg font-medium">
                      {productsData.name}
                    </p>
                    <div className="flex items-center gap-5 mt-2 ">
                      <p className="text-green-600 font-sans">
                        {currency}
                        {productsData.price}
                      </p>
                    </div>
                  </div>
                </div>
                <input
                  className="bg-[#111111] text-white border rounded-md max-w-5 sm:max-w-10 max-h-7 sm:max-h-10 px-1 sm:px-2 py-1 mt-6"
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(item._id, Number(e.target.value))
                  }
                />
                <img
                  onClick={() => updateQuantity(item._id, 0)}
                  className="w-5 mr-4 mt-8 sm:w-10 cursor-pointer"
                  src="public/bin.png"
                  alt="Remove"
                />
              </div>
            );
          })}
        </div>
      )}
      {cartData.length > 0 && (
        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px]">
            <CartTotal />
            <div className="w-full text-end">
              <button
                onClick={() => navigate("/place-order")}
                className="bg-purple-700 border white text-white text-sm my-8 px-8 py-3"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
