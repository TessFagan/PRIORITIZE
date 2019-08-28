const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const prioritySchema = new Schema({
    priority: { type: String, required: true },
    id: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Priority = mongoose.model("Priority", prioritySchema);

module.exports = Priority;