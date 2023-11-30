const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  age: { type: Number, min: 18 },
  phoneNumber: { type: String, required: true, unique: true },
  isActive: { type: Boolean, default: true },
});

const User = model("User", userSchema);

module.exports = User;
