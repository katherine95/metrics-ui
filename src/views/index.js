import React, { useEffect, useState } from "react";
import { client } from "../hooks";
import { Link } from "react-router-dom";
import MetricsTable from "./metricsTable";

const REACT_BASE_APP_URL = "http://localhost:3000/metrics";

const Metrics = () => {
  const [allMetrics, setAllMetrics] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(new Date(2022, 3, 21, 0, 0, 0, 0));

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

  useEffect(() => {
    fetchMetrics();
  }, []);

  return (
    <div className="home">
      <h1>View metrics</h1>
      <Link to="/add-metric"><button>Add metric</button></Link>
      {loading
        ? <div>Loading...</div>
        : !allMetrics.length
        ? <div>No data added</div>
        : <MetricsTable allMetrics={allMetrics}/>}
    </div>
  );
};

export default Metrics;
