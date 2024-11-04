import React from "react";
import { SearchInput } from "./SearchInput";
import { Products } from "./Products";
import { PaginationCom } from "../../components/PaginationCom";

export const Home = () => {
  return (
    <div>
      HomePage
      <SearchInput />
      <Products />
      <PaginationCom />
    </div>
  );
};
