import mongoose from "mongoose";

const incidentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    source: {
      type: String,
      enum: ["email", "monitoring", "manual"],
      default: "manual",
    },
    category: { type: String },
    severity: { type: String, enum: ["P1", "P2", "P3", "P4"] },
    confidenceScore: { type: Number },
    status: {
      type: String,
      enum: ["open", "in-progress", "resolved"],
      default: "open",
    },
    assignedTeamId: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },

    aiInsights: {
      predictedCategory: String,
      predictedSeverity: String,
      similarIncidents: [mongoose.Schema.Types.ObjectId],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Incident", incidentSchema);
