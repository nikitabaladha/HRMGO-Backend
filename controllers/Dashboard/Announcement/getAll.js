const Announcement = require("../../../models/Announcement");

async function getAll(req, res) {
  try {
    // Extract userId from the logged-in user's token
    const userId = req.user.id;

    // Fetch all Announcements for the logged-in user (use userId to filter)
    const announcements = await Announcement.find({ userId });

    if (!announcements || announcements.length === 0) {
      return res.status(404).json({
        hasError: true,
        message: "No Announcement found for this user",
      });
    }

    return res.status(200).json({
      hasError: false,
      message: "Announcements fetched successfully",
      data: announcements,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Server error" });
  }
}

module.exports = { getAll };
