import axios from 'axios';

const API_URL = "http://localhost:5000/api/v1/users";

const UserService = {
    getAllUsers: async () => {
        try {
            const response = await axios.get(API_URL, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return response.data; // Axios automatically parses JSON response
        } catch (error) {
            console.error("Error fetching users:", error);
            throw error; // Re-throw error for handling in the component
        }
    },
};