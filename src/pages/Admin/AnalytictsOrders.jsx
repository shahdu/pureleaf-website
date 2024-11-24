import React, { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  CircularProgress,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";
import { OrdersContext } from "../../Context/OrderContext";
import { decodeToken } from "../../Utilities/TokenDecode";

// Register necessary Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

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
    // Group the orders by orderDate and calculate the total amount for each date
    const groupedOrders = userOrders.reduce((acc, order) => {
      const orderDate = new Date(order.orderDate).toLocaleDateString(); // group by date (e.g., 'Nov 24, 2024')
      if (!acc[orderDate]) {
        acc[orderDate] = 0;
      }
      acc[orderDate] += order.totalAmount;
      return acc;
    }, {});

    // Prepare data for the chart
    const dates = Object.keys(groupedOrders);
    const totalAmounts = Object.values(groupedOrders);

    setChartData({
      labels: dates,
      datasets: [
        {
          label: "Total Amount per Order Date",
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
        My Orders
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
