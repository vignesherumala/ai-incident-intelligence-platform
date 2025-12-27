import Incident from "../models/Incident.js";

export const createIncident = async (req, res) => {
  try {
    const incident = await Incident.create(req.body);
    res.status(201).json(incident);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllIncidents = async (req, res) => {
  try {
    const incidents = await Incident.find().sort({ createdAt: -1 });
    res.json(incidents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getIncidentById = async (req, res) => {
  try {
    const incident = await Incident.findById(req.params.id);
    if (!incident) return res.status(404).json({ message: "Not found" });
    res.json(incident);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
