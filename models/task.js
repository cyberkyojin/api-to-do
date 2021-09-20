const mongoose = require("mongoose");

const Task = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now(),
  },
});

mongoose.model("task", Task);
