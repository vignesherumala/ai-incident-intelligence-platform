import express from "express";
import {
  createIncident,
  getAllIncidents,
  getIncidentById,
} from "../controllers/incident.controller.js";

const router = express.Router();

router.post("/", createIncident);
router.get("/", getAllIncidents);
router.get("/:id", getIncidentById);

export default router;
