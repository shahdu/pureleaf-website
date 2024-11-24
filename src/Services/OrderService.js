import axios from 'axios';

 export const createOrder = async (orderData) => {
    try {
      const response = await axios.post(
        "https://ecommerce-backend-uod8.onrender.com/api/v1/orders",
        orderData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Order created:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error creating order:", error.response?.data || error.message);
      throw error;
    }
  };
  

  export const getOrders = async () => {
    try {
      const response = await axios.get(
        "https://ecommerce-backend-uod8.onrender.com/api/v1/orders"
      );
      return response.data;

    } catch (error) {
      console.error("Error creating order:", error.response?.data || error.message);
      throw error;
    }
  };

  export const getOrderById = async (orderId) => {
    try {
      const response = await axios(`https://ecommerce-backend-uod8.onrender.com/api/v1/orders/${orderId}`);
  
      return response.data;
    } catch (error) {
      console.error("Error fetching order:", error);
      return [];
    }
  };