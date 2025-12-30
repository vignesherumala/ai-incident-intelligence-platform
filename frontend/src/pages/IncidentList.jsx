import { useEffect, useState } from "react";
import { fetchIncidents } from "../api/incidentApi";
import { Link } from "react-router-dom";

const IncidentList = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    fetchIncidents()
      .then(res => {
        // IMPORTANT: handle both response types
        const data = res.data.incidents || res.data;
        setIncidents(data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    
    <div style={{ padding: "20px" }}>
        <a href="/create">+ Create Incident</a>

      <h1>AI Incident Dashboard</h1>

      {incidents.map((incident) => (
        <div key={incident._id} style={{ marginBottom: "10px" }}>
          {/* ✅ PASS CORRECT ID */}
          <Link to={`/incident/${incident._id}`}>
            <h3>{incident.title}</h3>
          </Link>
          <p>Severity: {incident.severity}</p>
        </div>
      ))}
    </div>
  );
};

export default IncidentList;
