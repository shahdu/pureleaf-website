import React from "react";

import { UserSearchInput } from "../../components/Users/UserSearchInput";
import { Users } from "../../components/Users/Users";
import { UserPagination } from "../../components/Users/UserPagination";

export const UsersList = () => {
  return (
    <div>
    
      <UserSearchInput />
      <Users />
      <UserPagination/>
    </div>
  );
};
