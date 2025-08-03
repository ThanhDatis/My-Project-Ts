import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Footer from "./layoutFooter";
import Header from "./layoutHeader";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />

      <Box component="main" sx={{ flex: 1 }}>
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
};

export default MainLayout;
