import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { decodeToken } from "../../Utilities/TokenDecode";
import { getUserById } from "../../Services/userService";


export const Profile = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signIn"); 
      return;
    }

    const decoded = decodeToken(token);
    const userId = decoded?.nameid;

    if (userId) {
      getUserById(userId)
        .then((response) => {
          if (response.success) {
            setUserInfo(response.data);
          } else {
            setError("Failed to fetch user data.");
          }
        })
        .catch((err) => {
          console.error("Error fetching user data:", err);
          setError("Error fetching user data.");
        });
    }
  }, [navigate]);

  if (!userInfo) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">User Profile</h1>
      <div className="p-4 border rounded shadow-sm">
        {error ? (
          <p className="text-danger">{error}</p>
        ) : (
          <>
            <p><strong>Username:</strong> {userInfo.userName || "N/A"}</p>
            <p><strong>Email:</strong> {userInfo.email || "N/A"}</p>
            <p><strong>Role:</strong> {userInfo.role || "N/A"}</p>
            <p><strong>Phone:</strong> {userInfo.phone || "N/A"}</p>
            {userInfo.image && (
              <div>
                <img src={userInfo.image} alt="User profile" className="img-thumbnail" />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
