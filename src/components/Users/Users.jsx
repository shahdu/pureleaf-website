import React, { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { User } from "./user";
import { UsersContext } from "../../Context/UserContext";

export const Users = () => {
  const { users } = useContext(UsersContext);


  return (
    <>
      <div className="container my-4">
        <h2 className="text-center mb-4" style={{ color: '#228B22', fontWeight: 'bold' }}>
          Users
        </h2>
        <div className="row">
          {users && users.length > 0 ? (
            users.map((user) => (
              <div key={user.userId} className="col-md-4 mb-4">
                <User user={user} />
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No users found</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
