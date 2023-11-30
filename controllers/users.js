const User = require("../models/user");

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("Ops... Something Went Wrong");
  }
};
const createUser = async (req, res) => {
  try {
    const { email, name, age, phoneNumber } = req.body;
    const user = await User.create({ email, name, age, phoneNumber });
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Ops... Something Went Wrong");
  }
};
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    // const user = await User.findOne({ _id: id });
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Ops... Something Went Wrong");
  }
};
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, name, age, phoneNumber } = req.body;
    const user = await User.findByIdAndUpdate(
      id,
      { email, name, age, phoneNumber },
      { new: true }
    );
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Ops... Something Went Wrong");
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Ops... Something Went Wrong");
  }
};

module.exports = {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
