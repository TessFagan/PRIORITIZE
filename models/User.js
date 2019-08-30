const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String },
  password: { type: String },
  priorities: { type: Array, "default": [] },
  todos: { type: Array, "default": [] }
});

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("User", userSchema);

// test user document
var silence = new User({ name: 'Silence', password: "123" });
console.log(silence.name); // 'Silence'

silence.save(function (err, silence) {
  if (err) return console.error(err);
  console.log("something happened")
});

// access all of the user documents through our User model.
User.find(function (err, users) {
  if (err) return console.error(err);
  console.log(users);
})


// Export the User model
module.exports = User;
