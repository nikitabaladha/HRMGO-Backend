const mongoose = require("mongoose");

const appraisalSchema = new mongoose.Schema(
  {
    branchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
      required: true,
    },
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    appraisalDate: {
      type: Date,
      required: true,
    },
    remarks: {
      type: String,
    },
    indicatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Indicator",
      required: true,
    },
    appraisalCompetencies: {
      organizational: {
        type: [
          {
            name: {
              type: String,
              required: true,
              enum: ["Leadership", "Project Management"],
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
      technical: {
        type: [
          {
            name: {
              type: String,
              required: true,
              enum: ["Allocating Resources"],
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
              enum: ["Business Process", "Oral Communication"],
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
  },
  {
    timestamps: true,
  }
);

const Appraisal = mongoose.model("Appraisal", appraisalSchema);

module.exports = Appraisal;
