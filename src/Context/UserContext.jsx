// CategoryContext.js
import React, { createContext, useState, useEffect } from "react";
import { getUsers } from "../Services/userService";

export const UsersContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortOrder, setSortOrder] = useState("asc");

  const fetchUsers = async () => {
    try {
      const usersData = await getUsers( searchValue,
        pageNumber,
        pageSize,
        sortOrder);
      setUsers(usersData.data.items);
      setTotalPages(usersData.data.totalPages);

    } catch (error) {
      setError(error);
      console.error("Error fetching users:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const refreshUsers = async () => {
    await fetchUsers();
  };
  useEffect(() => {
    fetchUsers();
  }, [searchValue,pageNumber,sortOrder]);


  return (
    <UsersContext.Provider value={{ users ,isLoading,
      error,
      searchValue,
      setSearchValue,
      pageNumber,
      setPageNumber,
      pageSize,
      setPageSize,
      sortOrder,
      setSortOrder,
      totalPages,
      fetchUsers,
      refreshUsers,
      }}>
      {children}
    </UsersContext.Provider>
  );
};
