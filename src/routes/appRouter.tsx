import React from "react";
import { Route, Routes } from "react-router-dom";

import MainLayout from "../components/layouts/layoutMain";
import HomePage from "../pages/homePage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
