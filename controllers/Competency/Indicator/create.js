const Indicator = require("../../../models/Indicator");
const User = require("../../../models/User");

async function create(req, res) {
  try {
    // Destructure the data from the request body
    const {
      branch,
      department,
      designation,
      addedById,
      competencies,
      overAllRating,
    } = req.body;

    // Validate if the addedById exists in the User collection
    const user = await User.findById(addedById);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Validate competencies for each category (organizational, technical, behavioural)
    const validateCompetencies = (competencies, validCompetencies) => {
      return competencies.every((competency) =>
        validCompetencies.includes(competency.name)
      );
    };

    // Check the organizational competencies
    if (
      !validateCompetencies(competencies.organizational, [
        "Leadership",
        "Project Management",
      ])
    ) {
      return res
        .status(400)
        .json({ message: "Invalid organizational competencies" });
    }

    // Check the technical competencies
    if (
      !validateCompetencies(competencies.technical, ["Allocating Resources"])
    ) {
      return res
        .status(400)
        .json({ message: "Invalid technical competencies" });
    }

    // Check the behavioural competencies
    if (
      !validateCompetencies(competencies.behavioural, [
        "Business Process",
        "Oral Communication",
      ])
    ) {
      return res
        .status(400)
        .json({ message: "Invalid behavioural competencies" });
    }

    // Create a new Indicator object with the provided data
    const indicator = new Indicator({
      branch,
      department,
      designation,
      addedById,
      competencies,
      overAllRating,
    });

    // Save the Indicator document to the database
    const savedIndicator = await indicator.save();

    // Return the saved indicator object in the response
    res.status(201).json({
      message: "Indicator created successfully",
      data: savedIndicator,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

module.exports = create;
