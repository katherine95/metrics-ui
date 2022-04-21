import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Metrics from "./views";
import AddMetric from "./views/addMetric";
// import TriviaQuiz from "./views/quiz";
// import Results from "./views/results";

const MetricsAppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Metrics />} exact />
        <Route path="/add-metric" element={<AddMetric />} exact />
        {/* <Route path="/results" element={<Results />} exact />
        <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default MetricsAppRoutes;
