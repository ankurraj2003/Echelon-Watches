import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl } from "../App";
const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Rolex");
  const [subCategory, setSubCategory] = useState("Men");
  const [bestseller, setBestseller] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );
      console.log(response.data);
      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3 "
    >
      <div>
        <p>Upload Images</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img
              className="w-28 sm:w-60 mt-4 cursor-grab"
              src={!image1 ? "public/upload.jpg" : URL.createObjectURL(image1)}
              alt="Upload item image"
            ></img>
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="image1"
              hidden
            ></input>
          </label>
          <label htmlFor="image2">
            <img
              className="w-28 sm:w-60 mt-4 cursor-grab"
              src={!image2 ? "public/upload.jpg" : URL.createObjectURL(image2)}
              alt="Upload item image"
            ></img>
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              id="image2"
              hidden
            ></input>
          </label>{" "}
          <label htmlFor="image3">
            <img
              className="w-28 sm:w-60 mt-4 cursor-grab"
              src={!image3 ? "public/upload.jpg" : URL.createObjectURL(image3)}
              alt="Upload item image"
            ></img>
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              id="image3"
              hidden
            ></input>
          </label>{" "}
          <label htmlFor="image4">
            <img
              className="w-28 sm:w-60 mt-4 cursor-grab"
              src={!image4 ? "public/upload.jpg" : URL.createObjectURL(image4)}
              alt="Upload item image"
            ></img>
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              id="image4"
              hidden
            ></input>
          </label>
        </div>
      </div>
      <div className="w-full">
        <p>Product Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="bg-[#111111] w-full max-w-[500px] mt-4 px-3 py-2 border border-gray-700 rounded-md"
          type="text"
          placeholder="Type Here"
          required
        ></input>
      </div>
      <div className="w-full">
        <p>Product Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-[#111111] w-full max-w-[500px] mt-4 px-3 py-2 border border-gray-700 rounded-md"
          type="text"
          placeholder="Write Description Here"
          required
        />
      </div>
      <div>
        <p>Category</p>
        <select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="bg-[#111111] border border-gray-700 rounded-md mt-2 "
        >
          <option value="Rolex">Rolex</option>
          <option value="AP">AP</option>
          <option value="Hublot">Hublot</option>
          <option value="Richard Mille">Richard Mille</option>
          <option value="Jacob & Co">Jacob & Co</option>
          <option value="Cartier">Cartier</option>
          <option value="Patek Philippe">Patek Philippe</option>
        </select>
      </div>{" "}
      <div>
        <p>Subcategory</p>
        <select
          onChange={(e) => setSubCategory(e.target.value)}
          value={subCategory}
          className="bg-[#111111] border border-gray-700 rounded-md mt-2 "
        >
          <option value="Men">Men</option>
          <option value="Women">Women</option>
        </select>
      </div>
      <div>
        <p>Product Price</p>
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          className="bg-[#111111] border border-gray-700 rounded-md mt-2 p-1"
          type="number"
          placeholder="₹ INR"
        ></input>
      </div>
      <div>
        <input
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
        />
        <label className="cursor-pointer p-2" htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>
      <button
        className="w-22 py-3 mt-4 bg-blue-400 border-none text-white"
        type="submit"
      >
        ADD
      </button>
    </form>
  );
};

export default Add;
