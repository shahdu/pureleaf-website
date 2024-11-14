
import React from "react";
import { Categories } from "./Categories";
import { CateSearchInput } from "./CateSearchInput";
import { CatePagination } from "./CatePagination";

export const CategoryList = () => {
  return (
    <div>
      <CateSearchInput />
      <Categories />
      <CatePagination />
    </div>
  );
};
