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
  
