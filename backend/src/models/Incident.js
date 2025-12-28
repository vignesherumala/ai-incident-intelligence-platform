import mongoose from "mongoose";

const incidentSchema = new mongoose.Schema(
  {
    // 🔹 Basic Incident Info
    title: { type: String, required: true },
    description: { type: String, required: true },

    // 🔹 Source of incident
    source: {
      type: String,
      enum: ["email", "monitoring", "manual"],
      default: "manual",
    },

    // 🔹 Final category & severity (after AI + human validation)
    category: { type: String },
    severity: {
      type: String,
      enum: ["Low", "Medium", "High", "Critical"],
      required: true,
    },
    type: {
      type: String,
    },
    rootCause: {
      type: String,
    },

    // 🔹 AI confidence score (0–100)
    confidenceScore: {
      type: Number,
      min: 0,
      max: 100,
    },

    // 🔹 Incident lifecycle status
    status: {
      type: String,
      enum: ["open", "in-progress", "resolved"],
      default: "open",
    },

    // 🔹 Assignment
    assignedTeamId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },

    // 🔥 PHASE 4 – AI INSIGHTS
    aiInsights: {
      predictedCategory: {
        type: String,
      },
      predictedSeverity: {
        type: String,
        enum: ["P1", "P2", "P3", "P4"],
      },
      rootCause: {
        type: String,
      },
      similarIncidents: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Incident",
        },
      ],
      modelVersion: {
        type: String,
      },
      processedAt: {
        type: Date,
      },
    },

    // 🔹 AI processing flag
    aiProcessed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Incident", incidentSchema);
