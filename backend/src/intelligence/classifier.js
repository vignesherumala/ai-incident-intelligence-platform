export const classifyIncident = (incident) => {
  const text = `${incident.title} ${incident.description}`.toLowerCase();

  if (text.includes("server") || text.includes("cpu")) {
    return "Server Issue";
  }
  if (text.includes("network") || text.includes("latency")) {
    return "Network Issue";
  }
  if (text.includes("database") || text.includes("db")) {
    return "Database Issue";
  }

  return "General IT Issue";
};
