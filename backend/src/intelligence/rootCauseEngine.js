export const suggestRootCause = (incidentType) => {
  const rootCauseMap = {
    "Server Issue": "High CPU usage or memory leak",
    "Network Issue": "Router or switch failure",
    "Database Issue": "Connection pool exhaustion",
    "General IT Issue": "Configuration or dependency issue"
  };

  return rootCauseMap[incidentType] || "Unknown";
};
