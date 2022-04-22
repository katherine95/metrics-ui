import React, { useEffect, useState } from "react";
import { client } from "../hooks";
import { Link } from "react-router-dom";
import MetricsTable from "./metricsTable";

const REACT_BASE_APP_URL = "http://localhost:3000/metrics";

const Metrics = () => {
  const [allMetrics, setAllMetrics] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMetrics = async () => {
    setLoading(true);
    try {
      const { data } = await client.get(REACT_BASE_APP_URL);
      setLoading(false);
      setAllMetrics(data);
    } catch (error) {
        setLoading(false);
    }
  };

  const isLessThan24HoursAgo = (date) => {
    let currentDate = new Date()
    const startDate = new Date(currentDate.setHours(currentDate.getHours()-24));
    return date > startDate;
  }

  const metricsInLast24Hrs = allMetrics.filter((metric) => isLessThan24HoursAgo(new Date(metric.created_at)));

  const getAverageMetrics = (timeInMin) => 
    Math.floor((timeInMin * metricsInLast24Hrs.length)/1440);

  useEffect(() => {
    fetchMetrics();
  }, []);

  return (
    <div className="home">
      <h1>View metrics</h1>
      <Link to="/add-metric"><button>Add metric</button></Link>
      <h3>Averages</h3>
      <div>{metricsInLast24Hrs.length} per day</div>
      <div>{getAverageMetrics(60)} per hour</div>
      <div>{getAverageMetrics(1)} per minute</div>
      {loading
        ? <div>Loading...</div>
        : !allMetrics.length
        ? <div>No data added</div>
        : <MetricsTable allMetrics={allMetrics}/>}
    </div>
  );
};

export default Metrics;
