import { useEffect, useState } from "react";
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

      <h3>Severity Breakdown</h3>
      {data.bySeverity.map(s => (
        <p key={s._id}>{s._id}: {s.count}</p>
      ))}

      <h3>Incident Types</h3>
      {data.byType.map(t => (
        <p key={t._id}>{t._id}: {t.count}</p>
      ))}
    </div>
  );
}
