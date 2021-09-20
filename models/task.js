const mongoose = require("mongoose");

// let date = new Date();
// let formattedDate = ((date.getDate() )) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear();

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
