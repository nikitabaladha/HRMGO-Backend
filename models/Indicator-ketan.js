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
    Question: [
      {
        rating: {
          type: String,
        },
        questionId: {
          type: String,
          type: mongoose.Schema.Types.ObjectId,
          ref: "CompetencyList",
        },
      },
    ],
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
