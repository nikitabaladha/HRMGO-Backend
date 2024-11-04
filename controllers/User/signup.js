// controller/User/signup.js

const User = require("../../models/User");

const signup = async (req, res) => {
  try {
    console.log("Request received at create endpoint");
    console.log("Request body:", req.body);

    const { firstName, lastName, email, password, role } = req.body;

    // Check if required fields are present
    if (!firstName || !lastName || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      role,
    });

    await newUser.save();

    console.log("User saved to database:", newUser);

    res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Error in create controller:", error.message);

    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already exists" });
    }

    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};

module.exports = signup;
