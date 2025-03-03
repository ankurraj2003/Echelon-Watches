import axios from "axios";
import React, { useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-center mt-8">ADMIN PANEL🔑</h1>
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-500"
        >
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium mb-2">Admin Email Address</p>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              className="w-full px-3 py-2 text-black border border-gray-800 rounded-lg opacity-35"
              type="email"
              placeholder="Your email"
              required
            ></input>
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium mb-2">Admin Password</p>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              className="w-full px-3 py-2 text-black border border-gray-800 rounded-lg opacity-35"
              type="password"
              placeholder="Your password"
              required
            ></input>
          </div>
          <button id="login" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
