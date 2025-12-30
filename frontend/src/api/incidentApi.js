import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const fetchIncidents = () => API.get("/incidents");
export const fetchIncidentById = (id) => API.get(`/incidents/${id}`);
export const createIncident = (data) => API.post("/incidents", data);
