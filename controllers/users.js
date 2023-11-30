// Import the User model.
const User = require("../models/user");

// Function to get all users
const getUsers = async (req, res) => {
  try {
    // Retrieve all users from the database
    const users = await User.find({});

    // Respond with the list of users in JSON format
    res.json(users);
  } catch (error) {
    // Log the error and send a 500 Internal Server Error response
    console.log(error);
    res.status(500).send("Ops... Something Went Wrong");
  }
};

// Function to create a new user
const createUser = async (req, res) => {
  try {
    // Extract user data from the request body
    const { email, name, age, phoneNumber } = req.body;

    // Create a new user in the database
    const user = await User.create({ email, name, age, phoneNumber });

    // Respond with the created user in JSON format
    res.status(201).json(user);
  } catch (error) {
    // Log the error and send a 500 Internal Server Error response
    console.log(error);
    res.status(500).send("Ops... Something Went Wrong");
  }
};

// Function to get a specific user by ID
const getUser = async (req, res) => {
  try {
    // Extract the user ID from the request parameters
    const { id } = req.params;

    // Find the user in the database by ID
    const user = await User.findById(id);

    // Respond with the found user in JSON format
    res.json(user);
  } catch (error) {
    // Log the error and send a 500 Internal Server Error response
    console.log(error);
    res.status(500).send("Ops... Something Went Wrong");
  }
};

// Function to update a user by ID
const updateUser = async (req, res) => {
  try {
    // Extract the user ID from the request parameters
    const { id } = req.params;

    // Extract updated user data from the request body
    const { email, name, age, phoneNumber } = req.body;

    // Find and update the user in the database
    const user = await User.findByIdAndUpdate(
      id,
      { email, name, age, phoneNumber },
      { new: true }
    );

    // Respond with the updated user in JSON format
    res.json(user);
  } catch (error) {
    // Log the error and send a 500 Internal Server Error response
    console.log(error);
    res.status(500).send("Ops... Something Went Wrong");
  }
};

// Function to delete a user by ID
const deleteUser = async (req, res) => {
  try {
    // Extract the user ID from the request parameters
    const { id } = req.params;

    // Find and delete the user in the database by ID
    const user = await User.findByIdAndDelete(id);

    // Respond with the deleted user in JSON format
    res.json(user);
  } catch (error) {
    // Log the error and send a 500 Internal Server Error response
    console.log(error);
    res.status(500).send("Ops... Something Went Wrong");
  }
};

// Export all functions to be used in the usersRouter
module.exports = {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
