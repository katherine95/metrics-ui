import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Metrics from "./views";
import AddMetric from "./views/addMetric";

const MetricsAppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Metrics />} exact />
        <Route path="/add-metric" element={<AddMetric />} exact />
      </Routes>
    </BrowserRouter>
  );
};

export default MetricsAppRoutes;
