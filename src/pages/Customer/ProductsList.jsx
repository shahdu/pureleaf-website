import React from "react";

import { SearchInput } from "./SearchInput";
import { Products } from "./Products";
import { PaginationCom } from "../../components/PaginationCom";
import { SortCom } from "../../components/SortCom";
import { CategoryFilter } from "../../components/products/CategoryFilter";

export const ProductsList = () => {
  return (
    <div>
      <SearchInput />
      <SortCom />
      <CategoryFilter/>
      <Products />
      <PaginationCom />
    </div>
  );
};
