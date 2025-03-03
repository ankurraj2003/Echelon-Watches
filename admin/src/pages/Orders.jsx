import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl, currency } from "../App";
import { useState } from "react";
const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
      console.log(response.data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        {
          orderId,
          status: event.target.value,
        },
        { headers: { token } }
      );

      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(response.data);
    }
  };
  useEffect(() => {
    fetchAllOrders();
  }, [token]);
  return (
    <div>
      <h3>Current Orders</h3>
      <div>
        {orders.map((order, index) => (
          <div
            className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-600 p-5 md:p-8 my-3 md:my-4 "
            key={index}
          >
            <img className="w-9 mt-4" src="/parcel.png"></img>
            <div>
              <div>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return (
                      <p className="text-white mt-1" key={index}>
                        {item.name}
                        <span className="ml-3 text-blue-500">
                          x {item.quantity}
                        </span>
                      </p>
                    );
                  } else {
                    <p className="text-white mt-1" key={index}>
                      {item.name}
                      <span className="ml-3 text-blue-500">
                        x {item.quantity}
                      </span>
                      ,
                    </p>;
                  }
                })}
              </div>
              <p className="font-mono">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div>
                <p className="font-mono">
                  {order.address.street +
                    ", " +
                    order.address.city +
                    "," +
                    order.address.state +
                    "," +
                    order.address.country +
                    "," +
                    order.address.zipcode}
                </p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <div>
              <p className="font-bold">Items: {order.items.length}</p>
              <p className="font-bold">Method: {order.paymentMethod}</p>
              <p className="font-bold">
                Payment:{" "}
                {order.payment ? (
                  <span className="text-green-800">Done</span>
                ) : (
                  <span className="text-red-800">Pending</span>
                )}
              </p>
              <p className="font-bold">
                Date: {new Date(order.date).toLocaleDateString()}
              </p>
            </div>
            <p className="font-bold text-green-800">
              {currency}
              {order.amount}
            </p>
            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
              className="bg-[#111111] border border-gray-600"
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Deliverd">Deliverd</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
