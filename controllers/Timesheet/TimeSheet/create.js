const TimeSheetValidator = require("../../../validators/TimeSheet/TimeSheetValidator");
const TimeSheet = require("../../../models/TimeSheet");

async function create(req, res) {
  try {
    // Validate the incoming request body using Joi schema
    const { error } = TimeSheetValidator.validate(req.body);

    if (error?.details?.length) {
      const errorMessages = error.details.map((err) => err.message).join(", ");
      return res.status(400).json({ message: errorMessages });
    }

    // Destructure the required fields from the request body
    const { employeeId, date, remark, hours } = req.body;

    // Create a new TimeSheet instance
    const newTimeSheet = new TimeSheet({
      employeeId, // Use employeeId if it's required
      date, // Ensure "date" field is used (not "Date")
      remark,
      hours,
    });

    // Save the new timeSheet to the database
    await newTimeSheet.save();

    // Respond with a success message
    return res.status(201).json({
      message: "TimeSheet created successfully!",
      timeSheet: newTimeSheet,
    });
  } catch (error) {
    // Handle errors that may occur during the process
    console.error("Error creating timeSheet:", error);
    return res.status(500).json({
      message: "Failed to create timeSheet.",
      error: error.message,
    });
  }
}

module.exports = create;
