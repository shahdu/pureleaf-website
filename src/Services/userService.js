import axios from "axios";

const User_URL = "http://localhost:5000/api/v1/users";

const token = localStorage.getItem("token");


//get user by id
export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${User_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
  }
};

//get users
export const getUsers = async (
  searchValue = "",
  pageNumber = 1,
  pageSize = 10,
  sortOrder = "asc"
) => {

  const params = new URLSearchParams();
  params.append("pageNumber", pageNumber);
  params.append("pageSize", pageSize);

  if (searchValue) {
    params.append("searchTerm", searchValue);
  }
  if (sortOrder) {
    params.append("sortOrder", sortOrder);
  }
  try {
      const response = await axios.get(`${User_URL}?${params.toString()}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
  }
};
//delete user by id

export const deleteUserById = async (userId) => {

  try {
      const response = await axios.delete(`${User_URL}/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("deleted user:", response.data);
      return response.data;
    
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
  }
};

// Update user
export const updateUser = async (userId, updatedData) => {
  
  try {
    const response = await axios.put(`${User_URL}/${userId}`, updatedData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

//register
export const registerUser = async (userName, password, email, phone, image) => {
  try {
    const payload = {
      UserName: userName,
      Password: password,
      Email: email,
      Phone: phone,
      Image: image,
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
//login
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

    console.log("Full response:", response);
    return response.data;
  } catch (error) {
    console.error(
      "Error logging in user:",
      error.response?.data || error.message
    );
    throw error;
  }
};
