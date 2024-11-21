const mongoose = require("mongoose");

const indicatorSchema = new mongoose.Schema(
  {
    branch: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    addedById: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    competencies: {
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
              enum: ["Allocating Resources"], // Fixed competencies for Technical
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
    overAllRating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      set: (v) => Math.round(v * 100) / 100,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Indicator = mongoose.model("Indicator", indicatorSchema);

module.exports = Indicator;

/* 
Category - Behavioural
Id - Auto generated identifier
name - oral communication

Question: [{
    rating: {
      type: String,
    },
    questionId: {
      type: String,
    }
}] */
