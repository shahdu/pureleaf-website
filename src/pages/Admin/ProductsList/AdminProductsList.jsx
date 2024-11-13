import React from "react";

import { PaginationCom } from "../../../components/products/PaginationCom";
import { SortCom } from "../../../components/products/SortCom";
import { SearchInput } from "../../../components/products/SearchInput";
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
