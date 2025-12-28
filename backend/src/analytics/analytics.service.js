import Incident from "../models/Incident.js";

export const getIncidentAnalytics = async () => {
  const totalIncidents = await Incident.countDocuments();

  const bySeverity = await Incident.aggregate([
    { $group: { _id: "$severity", count: { $sum: 1 } } }
  ]);

  const byType = await Incident.aggregate([
    { $group: { _id: "$type", count: { $sum: 1 } } }
  ]);

  const dailyTrend = await Incident.aggregate([
    {
      $group: {
        _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
        count: { $sum: 1 }
      }
    },
    { $sort: { _id: 1 } }
  ]);

  return {
    totalIncidents,
    bySeverity,
    byType,
    dailyTrend
  };
};
