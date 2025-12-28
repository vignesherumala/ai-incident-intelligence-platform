    import { getIncidentAnalytics } from "../analytics/analytics.service.js";

export const fetchAnalytics = async (req, res) => {
  try {
    const data = await getIncidentAnalytics();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
