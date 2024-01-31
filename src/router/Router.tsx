import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/notFound/NotFound";
import Home from "../pages/home/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
