import axios from 'axios';

const API_URL = 'https://ecommerce-backend-uod8.onrender.com/api/v1/orders'; // Adjust the URL if needed

// Function to create a new order
export const createOrder = async (orderData) => {
    try {
        const response = await axios.post(API_URL, orderData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data; // Return the created order data
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to create order');
    }
};
