import axios from "axios";

const User_URL = "http://localhost:5000/api/v1/users";

export const registerUser = async (userName, password, email) => {
  try {
    const payload = {
      UserName: userName,
      Password: password,
      Email: email,
    };

    const response = await axios.post(
      "http://localhost:5000/api/v1/auth/register",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
    try {
      const payload = {
        Email: email,
        Password: password,
      };
  
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      console.log("Full response:", response); // Log the full response object
      return response.data; // Ensure you're returning the correct data
    } catch (error) {
      console.error("Error logging in user:", error.response?.data || error.message);
      throw error;
    }
  };
  

export const getAllUsers = async () => {
  const response = await axios.get(User_URL);
  return response.data;
};

export const getSingleUser = async (id) => {
    const response = await axios.get(`${User_URL}/${id}`);
    return response.data;
  };
