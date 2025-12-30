import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchIncidentById } from "../api/incidentApi";

const IncidentDetail = () => {
  const { id } = useParams();
  const [incident, setIncident] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) {
      setError("Invalid incident ID");
      return;
    }

    fetchIncidentById(id)
      .then(res => {
        setIncident(res.data.incident || res.data);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to load incident details");
      });
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!incident) return <p>Loading incident details...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{incident.title}</h2>
      <p>{incident.description}</p>

      <hr />

      <h3>AI Intelligence</h3>
      <p><strong>Severity:</strong> {incident.severity}</p>
      <p><strong>Root Cause:</strong> {incident.aiInsights?.rootCause}</p>
      <p><strong>Resolution:</strong> {incident.aiInsights?.resolution}</p>

      <hr />

      <h3>Similar Incidents</h3>
      {incident.aiInsights?.similarIncidents?.length > 0 ? (
        incident.aiInsights.similarIncidents.map(sim => (
          <p key={sim._id}>{sim.title}</p>
        ))
      ) : (
        <p>No similar incidents found</p>
      )}
    </div>
  );
};

export default IncidentDetail;
