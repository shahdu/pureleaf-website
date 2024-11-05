import React from "react";
import { SearchInput } from "./SearchInput";
import { Products } from "./Products";
import { PaginationCom } from "../../components/PaginationCom";
import { SortCom } from "../../components/SortCom";

export const Home = () => {
  return (
    <div>
      HomePage
      <SearchInput />
      <SortCom />
      <Products />
      <PaginationCom />
    </div>
  );
};
