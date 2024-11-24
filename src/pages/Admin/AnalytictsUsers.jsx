import React, { useEffect, useState, useContext } from "react";
import { Pie } from "react-chartjs-2";
import { CircularProgress, Typography, Box } from "@mui/material";
import { UsersContext } from "../../Context/UserContext";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const AnalysisUser = () => {
  const { users, isLoading, fetchUsers } = useContext(UsersContext);
  const [roleData, setRoleData] = useState({ admin: 0, customer: 0 });

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const adminCount = users.filter((user) => user.role === 0).length;
    const customerCount = users.filter((user) => user.role === 1).length;
    setRoleData({ admin: adminCount, customer: customerCount });
  }, [users]);

  const chartData = {
    labels: ["Admin", "Customer"],
    datasets: [
      {
        label: "User Roles",
        data: [roleData.admin, roleData.customer],
        backgroundColor: ["#A8D08D", "#6B8E23"],
        hoverBackgroundColor: ["#8FBC8F", "#3E8E41"],
      },
    ],
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 5, width: "100%", maxWidth: "360px", height: "300px" }}>
      <Typography variant="h5" color="textPrimary" sx={{ mb: 10}}>
        Users Analytics
      </Typography>
      {isLoading ? (
        <CircularProgress color="primary" />
      ) : (
        <Pie
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              tooltip: { enabled: false },
              legend: { position: "right" },
            },
            hover: { mode: "nearest", intersect: false },
          }}
        />
      )}
    </Box>
  );
};
