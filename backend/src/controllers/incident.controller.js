import Incident from "../models/Incident.js";
import { classifyIncident } from "../intelligence/classifier.js";
import { predictSeverity } from "../intelligence/severityPredictor.js";
import { suggestRootCause } from "../intelligence/rootCauseEngine.js";

export const createIncident = async (req, res) => {
  try {
    const incidentData = req.body;

    // 🔥 AI Intelligence
    const type = classifyIncident(incidentData);
    const severity = predictSeverity(incidentData);
    const rootCause = suggestRootCause(type);

    const incident = new Incident({
      ...incidentData,
      type,
      severity,
      rootCause,
      aiProcessed: true
    });

    await incident.save();

    res.status(201).json({
      message: "Incident created with AI intelligence",
      incident
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllIncidents = async (req, res) => {
  try {
    const incidents = await Incident.find().sort({ createdAt: -1 });
    res.status(200).json(incidents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET incident by ID
export const getIncidentById = async (req, res) => {
  try {
    const incident = await Incident.findById(req.params.id);
    if (!incident) {
      return res.status(404).json({ message: "Incident not found" });
    }
    res.status(200).json(incident);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE incident
export const updateIncident = async (req, res) => {
  try {
    const incident = await Incident.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!incident) {
      return res.status(404).json({ message: "Incident not found" });
    }
    res.status(200).json(incident);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE incident
export const deleteIncident = async (req, res) => {
  try {
    const incident = await Incident.findByIdAndDelete(req.params.id);
    if (!incident) {
      return res.status(404).json({ message: "Incident not found" });
    }
    res.status(200).json({ message: "Incident deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
