// CategoryContext.js
import React, { createContext, useState, useEffect } from "react";
import { getOrders } from "../Services/OrderService";

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchOrders = async () => {
    try {
      const OrdersData = await getOrders();
      setOrders(OrdersData.data.items);

    } catch (error) {
      setError(error);
      console.error("Error fetching orders:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const refreshOrders = async () => {
    await fetchOrders();
  };
  useEffect(() => {
    fetchOrders();
  }, );


  return (
    <OrdersContext.Provider value={{ orders ,isLoading,
      error,
  
      fetchOrders,
      refreshOrders,
   
      }}>
      {children}
    </OrdersContext.Provider>
  );
};
