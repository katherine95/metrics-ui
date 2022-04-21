import React, { useState } from "react";
import { client } from "../hooks";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const REACT_BASE_APP_URL = "http://localhost:3000/metrics";

const AddMetric = () => {
  const [metricName, setMetricName] = useState();
  const [metricValue, setMetricValue] = useState();
  const navigate = useNavigate();

  const handleAddMetric = async (e) => {
    e.preventDefault();
    if(!metricName && !metricValue) {
      toast.error("Metric name or value cannot be blank.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    } else {
      try {
        await client.post(REACT_BASE_APP_URL, { name: metricName, value: metricValue });
        navigate("/");
      } catch (error) {
        toast.error("Metric could not be added at this time.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
    }
  };

  return (
    <div className="home">
      <ToastContainer/>
      <form>
        <div className="title">Add Metric</div>
        <div className="form-content">
          <label>Name</label>
          <input
            placeholder="Name"
            onChange={({ target: { value }}) => setMetricName(value)}
          />
          <span style={{ visibility: `${metricName ? "hidden" : "visible"}`}}>*Required</span>
          <label>Description</label>
          <input
            placeholder="Description"
            onChange={({ target: { value }}) => setMetricValue(value)}
          />
          <span style={{ visibility: `${metricValue ? "hidden" : "visible"}`}}>*Required</span>
          <div className="footer">
            <button
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleAddMetric}
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMetric;
