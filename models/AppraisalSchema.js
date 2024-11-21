const mongoose = require("mongoose");

const appraisalSchema = new mongoose.Schema(
  {
    branch: {
      type: String,
      required: true, // Branch where the appraisal is taking place
    },
    employee: {
      type: String,
      required: true, // Employee name
    },
    month: {
      type: String,
      required: true, // Month of the appraisal
    },
    remarks: {
      type: String, // Optional remarks field
    },
    indicator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Indicator", // Reference to the Indicator schema
      required: true,
    },
    appraisalRatings: {
      organizational: {
        type: [
          {
            name: {
              type: String,
              required: true,
              enum: ["Leadership", "Project Management"], // Fixed competencies for Organizational
            },
            rating: {
              type: Number,
              required: true,
              min: 1,
              max: 5, // Appraisal rating must be between 1 and 5
            },
          },
        ],
        required: true,
      },
      technical: {
        type: [
          {
            name: {
              type: String,
              required: true,
              enum: ["Allocating Resources"], // Fixed competency for Technical
            },
            rating: {
              type: Number,
              required: true,
              min: 1,
              max: 5,
            },
          },
        ],
        required: true,
      },
      behavioural: {
        type: [
          {
            name: {
              type: String,
              required: true,
              enum: ["Business Process", "Oral Communication"], // Fixed competencies for Behavioural
            },
            rating: {
              type: Number,
              required: true,
              min: 1,
              max: 5,
            },
          },
        ],
        required: true,
      },
    },
    createdAt: {
      type: Date,
      default: Date.now, // Timestamp for when the appraisal is created
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

const Appraisal = mongoose.model("Appraisal", appraisalSchema);

module.exports = Appraisal;
