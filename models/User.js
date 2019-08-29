const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
  name: { type: String, unique: true },
  password: { type: String, },
  priorities: { type: Array, "default": [] },
  todos: { type: Array, "default": [] }
});

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("User", userSchema);

// Export the User model
module.exports = User;
