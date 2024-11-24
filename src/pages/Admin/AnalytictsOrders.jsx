import React, { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement } from "chart.js";
import { OrdersContext } from "../../Context/OrderContext";
import { decodeToken } from "../../Utilities/TokenDecode";

// Register all necessary Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement);

export const AnalytictsOrders = () => {
  const navigate = useNavigate();
  const { orders, isLoading, error } = useContext(OrdersContext);
  const [chartData, setChartData] = useState(null);

  // Retrieve the userId from the token
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/signIn");
    return null;
  }

  const decoded = decodeToken(token);
  const userId = decoded?.nameid;

  // Filter orders based on userId
  const userOrders = orders.filter((order) => order.user?.userId === userId);

  useEffect(() => {
    // Group the orders by month and year, calculate the total amount for each month
    const groupedOrders = userOrders.reduce((acc, order) => {
      const orderDate = new Date(order.orderDate);
      const monthYear = `${orderDate.toLocaleString('default', { month: 'short' })} ${orderDate.getFullYear()}`; // Format as "Nov 2024"
      if (!acc[monthYear]) {
        acc[monthYear] = 0;
      }
      acc[monthYear] += order.totalAmount;
      return acc;
    }, {});

    // Prepare data for the chart
    const dates = Object.keys(groupedOrders);
    const totalAmounts = Object.values(groupedOrders);

    setChartData({
      labels: dates,
      datasets: [
        {
          label: "Total Amount per Month",
          data: totalAmounts,
          fill: false,
          borderColor: "#388E3C", // Line color
          tension: 0.1, // Smooth curve
        },
      ],
    });
  }, [userOrders]);

  if (isLoading) {
    return <CircularProgress color="primary" />;
  }

  if (error) {
    return <Typography color="error">Error: {error.message}</Typography>;
  }

  return (
    <div className="container my-4">
      <Typography variant="h4" align="center" gutterBottom style={{ color: "#388E3C", fontWeight: "bold" }}>
        Orders Analytics
      </Typography>

      {userOrders.length === 0 ? (
        <Typography variant="h6" align="center" color="textSecondary">
          No orders found for this user.
        </Typography>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 5 }}>
          {chartData ? (
            <Line
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  tooltip: { enabled: true },
                  legend: { position: "top" },
                },
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: "Month/Year",
                    },
                  },
                  y: {
                    title: {
                      display: true,
                      text: "Total Amount",
                    },
                  },
                },
              }}
              height={400}
              width={600}
            />
          ) : (
            <Typography variant="h6" align="center" color="textSecondary">
              No data available for the chart.
            </Typography>
          )}
        </Box>
      )}
    </div>
  );
};
