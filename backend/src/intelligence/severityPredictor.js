export const predictSeverity = (incident) => {
  const impact = incident.impact || "low";
  const urgency = incident.urgency || "low";

  if (impact === "high" && urgency === "high") return "Critical";
  if (impact === "high" || urgency === "high") return "High";
  if (impact === "medium") return "Medium";

  return "Low";
};
