export const findSimilarIncidents = (currentIncident, pastIncidents) => {
  return pastIncidents.filter(incident =>
    incident.type === currentIncident.type &&
    incident.severity === currentIncident.severity
  ).slice(0, 3);
};
