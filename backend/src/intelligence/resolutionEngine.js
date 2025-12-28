export const suggestResolution = (incidentType, severity) => {
  if (incidentType === "Server Issue" && severity === "Critical") {
    return "Restart server services and scale infrastructure immediately";
  }

  if (incidentType === "Network Issue") {
    return "Check router, firewall rules, and network latency";
  }

  if (incidentType === "Database Issue") {
    return "Increase DB connection pool and restart database service";
  }

  return "Assign incident to IT support team for investigation";
};
