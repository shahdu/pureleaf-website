import axios from "axios";
const baseURL = "http://localhost:5000/api/products";

export const getAllProducts = async (
  searchValue = "",
  pageNumber = 1,
  pageSize = 3,
  sortOrder = "asc"
) => {
  const params = new URLSearchParams();

  params.append("pageNumber", pageNumber);
  params.append("pageSize", pageSize);

  if (searchValue) {
    params.append("searchTerm", searchValue);
  }
  if (sortOrder) {
    params.append("sortOrder", sortOrder);
  }
  const url = `${baseURL}?${params.toString()}`;
  const response = await axios.get(url);
  console.log(url);

  return response.data;
};
