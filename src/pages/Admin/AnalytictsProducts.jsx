import React, { useEffect, useState, useContext } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ProductContext } from "../../Context/ProductContext";
import { CategoryContext } from "../../Context/CategoryContext";
import { Box, Typography } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

export const AnalytictsProducts = () => {
  const { data: products } = useContext(ProductContext);
  const { categories } = useContext(CategoryContext);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ["#A8D08D", "#6B8E23", "#8FBC8F", "#3E8E41", "#2E7D32"],
        hoverBackgroundColor: ["#8FBC8F", "#6B8E23", "#7C9E4F", "#5A7C38", "#6A7345"],
      },
    ],
  });

  useEffect(() => {
    if (categories.length && products.length) {
      const categoryCounts = categories.map((category) => {
        const count = products.filter((product) => product.category.categoryId === category.categoryId).length;
        return { categoryName: category.categoryName, count };
      });

      const updatedChartData = {
        labels: categoryCounts.map((item) => item.categoryName),
        datasets: [{ ...chartData.datasets[0], data: categoryCounts.map((item) => item.count) }],
      };

      setChartData(updatedChartData);
    }
  }, [categories, products]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 5 }}>
      <Typography variant="h5" color="textPrimary" sx={{ mb: 3 }}>
        Products Analytics
      </Typography>
      {products.length === 0 || categories.length === 0 ? (
        <Typography>Loading data...</Typography>
      ) : (
        <Box sx={{ width: "100%", maxWidth: "600px", maxHeight: "400px", margin: "0 auto" }}>
          <Pie
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                tooltip: { enabled: false },
                legend: { position: "right" },
              },
              hover: { mode: "nearest", intersect: false },
            }}
          />
        </Box>
      )}
    </Box>
  );
};