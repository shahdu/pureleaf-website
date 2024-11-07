
//handel sign in and create the signout  
// 




// // src/context/UserContext.js
// import React, { createContext, useState, useContext } from "react";

// // Create the context
// const UserContext = createContext();

// // Custom hook to use the UserContext
// export const useUserContext = () => useContext(UserContext);

// export const UserProvider = ({ children }) => {
//   const [isSignIn, setIsSignIn] = useState(false);
//const [userLoggedIn, setUserLoggedIn] = useState(null);

// use useEffect() to check whether localStorate has user data logged in or not 
// if in local storage has user logged in data, setUserLoggedIn(userLoggedIn) 

//   // Update sign-in state
//   const login = () => {
//     setIsSignIn(true);
//     localStorage.setItem("token", "your_jwt_token");// Store token or set other states
//     console.log(setIsSignIn); 
//   };

//   // Update sign-out state
//   const logout = () => {
//     setIsSignIn(false);
//     localStorage.removeItem("token"); // Clear token or reset other states
//     console.log(setIsSignIn); 
//   };

//   return (
//     <UserContext.Provider value={{ isSignIn, login, logout }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
