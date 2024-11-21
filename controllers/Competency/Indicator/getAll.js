const CompetencyRating = require("../../../models/CompetencyRating");

async function getAll(req, res) {
  try {
    // Fetch all competency ratings
    const competencyRatings = await CompetencyRating.find().populate(
      "competencyListId"
    ); // Populate related CompetencyList data

    // Return the fetched competency ratings
    res.status(200).json(competencyRatings);
  } catch (err) {
    // Log the error and send a server error response
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = getAll;
