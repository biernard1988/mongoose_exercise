// Import necessary components from the mongoose library
const { Schema, model, Types } = require("mongoose");

// Define a mongoose schema for the User model
const userSchema = new Schema({
  // Define the email property with type String, required, and unique constraint
  email: { type: String, required: true, unique: true },

  // Define the name property with type String and required constraint
  name: { type: String, required: true },

  // Define the age property with type Number and a minimum value of 18
  age: { type: Number, min: 18 },

  // Define the phoneNumber property with type String, required, and unique constraint
  phoneNumber: { type: String, required: true, unique: true },

  // Define the isActive property with type Boolean and a default value of true
  isActive: { type: Boolean, default: true },
});

// Create a mongoose model named "User" based on the defined schema
const User = model("User", userSchema);

// Export the User model to be used in other parts of the application
module.exports = User;
