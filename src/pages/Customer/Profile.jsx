import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "../../Utilities/TokenDecode";
import { getUserById, updateUser } from "../../Services/userService";

export const Profile = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phone: "",
    image: "",
  });
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/signIn");
    return;
  }

  const decoded = decodeToken(token);
  const userId = decoded?.nameid;
  
  useEffect(() => {

  
    console.log(userId);

    if (userId) {
      getUserById(userId)
        .then((response) => {
          if (response.success) {
            setUserInfo(response.data);
            setFormData({
              userName: response.data.userName || "",
              email: response.data.email || "",
              phone: response.data.phone || "",
              image: response.data.image || "",
            });
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

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSave = async () => {
    try {
      const response = await updateUser(userId, formData);
      if (response.success) {
        setUserInfo({ ...userInfo, ...formData });
        setIsEditing(false);
      } else {
        setError("Failed to update user data.");
      }
    } catch (err) {
      console.error("Error updating user data:", err);
      setError("Error updating user data.");
    }
  };

  if (!userInfo) {
    return <p>Loading...</p>;
  }

  const role = userInfo.role === 0 ? "Admin" : "Customer";

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">User Profile</h1>
      <div className="p-4 border rounded shadow-sm">
        {error ? (
          <p className="text-danger">{error}</p>
        ) : (
          <>
            {isEditing ? (
              <>
                <div>
                  <label>Username:</label>
                  <input
                    type="text"
                    name="userName"
                    value={formData.userName}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <div>
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <div>
                  <label>Phone:</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <div>
                  <label>Profile Image URL:</label>
                  <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <button onClick={handleSave} className="btn btn-primary mt-3">
                  Save
                </button>
                <button onClick={handleEditToggle} className="btn btn-secondary mt-3 ml-2">
                  Cancel
                </button>
              </>
            ) : (
              <>
                <p><strong>Username:</strong> {userInfo.userName || "N/A"}</p>
                <p><strong>Email:</strong> {userInfo.email || "N/A"}</p>
                <p><strong>Role:</strong> {role}</p>
                <p><strong>Phone:</strong> {userInfo.phone || "N/A"}</p>
                {userInfo.image && (
                  <div>
                    <img src={userInfo.image} alt="User profile" className="img-thumbnail" />
                  </div>
                )}
                <button onClick={handleEditToggle} className="btn btn-primary mt-3">
                  Edit
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};
