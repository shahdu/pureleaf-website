import axios from "axios";
const baseURL = "http://localhost:5000/api/products";

export const getAllProducts = async (
  searchValue = "",
  pageNumber = 1,
  pageSize = 3,
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

  const url = `${baseURL}?${params.toString()}`;
  const response = await axios.get(url);
  console.log(url);

  return response.data;
};

export const registerUser = async (userName, password, email) => {
  try {
    const payload = {
      UserName: userName,
      Password: password,
      Email: email,
    };

const response = await axios.post("http://localhost:5000/api/v1/auth/register", payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  const response = await fetch('http://localhost:5000/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Login failed'); // Return the error message from the backend
  }

  const data = await response.json();
  return data.token; // Make sure your backend returns the token correctly
};




   