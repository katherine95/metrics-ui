import React from "react";

const MetricsTable = ({ allMetrics }) => {
  return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Date created</th>
          </tr>
          {allMetrics.map((metric) => 
            <tr key={metric.id}>
              <td>{metric.name}</td>
              <td>{metric.value}</td>
              <td>{metric.updated_at}</td>
            </tr>
          )}
        </tbody>
      </table>
  );
};

export default MetricsTable;
