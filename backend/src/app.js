import express from "express";
import cors from "cors";
import incidentRoutes from "./routes/incident.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/analytics", analyticsRoutes);
app.use("/api/incidents", incidentRoutes);


export default app;
