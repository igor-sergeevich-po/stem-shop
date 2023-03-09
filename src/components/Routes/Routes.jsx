import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};
