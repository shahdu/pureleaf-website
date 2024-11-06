import { jwtDecode } from "jwt-decode";

export const decodeToken = (token) => {
  if (!token) {
    console.error("No token provided for decoding.");
    return null;
  }
  
  try {
    const decoded = jwtDecode(token);
    console.log("Decoded token:", decoded);
    return decoded;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};
