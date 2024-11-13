import React from "react";

import { SearchInput } from "./SearchInput";
import { Products } from "./Products";
import { PaginationCom } from "./PaginationCom";
import { SortCom } from "./SortCom";
import { CategoryFilter } from "./CategoryFilter";

export const ProductsList = () => {
  return (
    <div>
      <SearchInput />
      <SortCom />
      <CategoryFilter />
      <Products />
      <PaginationCom />
    </div>
  );
};
