import React from "react";

import { UserSearchInput } from "./UserSearchInput";
import { Users } from "./Users";
import { UserPagination } from "./UserPagination";

export const UsersList = () => {
  return (
    <div>
      <UserSearchInput />
      <Users />
      <UserPagination />
    </div>
  );
};
