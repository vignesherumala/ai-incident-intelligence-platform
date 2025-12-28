import { useEffect, useState } from "react";
import SeverityPieChart from "../components/charts/SeverityPieChart";
import TypeBarChart from "../components/charts/TypeBarChart";
import TrendLineChart from "../components/charts/TrendLineChart";

import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/analytics")
      .then(res => setData(res.data))
      .catch(console.error);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
   <div>
  <h1>Incident Analytics Dashboard</h1>

  <p>Total Incidents: {data.totalIncidents}</p>

  <h3>Severity Distribution</h3>
  <SeverityPieChart data={data.bySeverity} />

  <h3>Incident Types</h3>
  <TypeBarChart data={data.byType} />

  <h3>Incident Trend</h3>
  <TrendLineChart data={data.dailyTrend} />
</div>

  );
}
