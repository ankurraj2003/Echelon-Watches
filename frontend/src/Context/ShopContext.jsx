import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ShopContext = createContext();
const ShopContextProvider = (props) => {
  const currency = "₹";
  const delivery_fee = 0;

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState(" ");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setproducts] = useState([]);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  //addToCart
  const addToCart = async (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId]) {
        cartData[itemId] += 1;
      } else {
        cartData[itemId] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId] = 1;
    }
    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/add",
          { itemId },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };
  //update quantity
  const updateQuantity = async (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/update",
          { itemId, quantity },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((products) => products._id === items);
      try {
        if (cartItems[items] > 0) {
          totalAmount += itemInfo.price * cartItems[items];
        }
      } catch (error) {}
    }
    return totalAmount;
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      try {
        if (cartItems[items] > 0) totalCount += cartItems[items];
      } catch (error) {}
    }
    return totalCount;
  };

  // Optimize Cloudinary URLs to serve WebP/AVIF with auto quality AND proper sizing.
  // Without a width constraint, Cloudinary serves the original upload (often 2000-4000px)
  // which can be 2-5 MB per image. Adding w_<size>,c_limit brings this down to ~30-100 KB.
  const optimizeCloudinaryUrl = (url, width) => {
    if (typeof url !== "string" || !url.includes("res.cloudinary.com")) return url;
    // If already optimized, don't double-transform
    if (url.includes("f_auto")) return url;
    const transforms = width
      ? `f_auto,q_auto,w_${width},c_limit`
      : "f_auto,q_auto";
    return url.replace("/upload/", `/upload/${transforms}/`);
  };

  // Build a URL helper that components can call with their own display width
  const getOptimizedImageUrl = (url, width = 400) => optimizeCloudinaryUrl(url, width);

  // Apply Cloudinary optimization to all product image URLs (default card size)
  const optimizeProducts = (productList) => {
    return productList.map((product) => ({
      ...product,
      image: product.image
        ? product.image.map((img) => optimizeCloudinaryUrl(img, 400))
        : product.image,
    }));
  };

  const getproductsData = async () => {
    try {
      // Try to use the early-prefetched data from the inline script in index.html
      let data = null;
      if (window.__PREFETCHED_PRODUCTS__) {
        try {
          data = await window.__PREFETCHED_PRODUCTS__;
          window.__PREFETCHED_PRODUCTS__ = null; // consume once
        } catch (e) {
          data = null;
        }
      }

      // Fallback to regular fetch if prefetch didn't work
      if (!data || !data.success) {
        const response = await axios.get(backendUrl + "/api/product/list");
        data = response.data;
      }

      if (data.success) {
        const optimized = optimizeProducts(data.products);
        setproducts(optimized);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const getUserCart = async (token) => {
    if (!token) {
      toast.error("Token is missing");
      return;
    }
    try {
      const response = await axios.post(
        backendUrl + "/api/cart/get",
        {},

        {
          headers: { token },
        }
      );
      if (response.data.success) {
        setCartItems(response.data.cartData);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getproductsData();
  }, []);
  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"));
    }
  });
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    setToken,
    token,
    setCartItems,
    getOptimizedImageUrl,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
