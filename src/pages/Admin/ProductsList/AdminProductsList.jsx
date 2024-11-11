import React from "react";

import { PaginationCom } from "../../../components/PaginationCom";
import { SortCom } from "../../../components/SortCom";
import { SearchInput } from "../../Customer/SearchInput";
import { AdminProducts } from "./AdminProducts";

export const AdminProductsList = () => {
  return (
    <div>
      Products List
      <SearchInput />
      <SortCom />
      <AdminProducts />
      <PaginationCom />
    </div>
  );
};
