const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
  name: {
    type: String
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teacher"
  },
  lecture: [
    {
      type: String
    }
  ],
  homework: [
    {
      type: String
    }
  ]
});

const courseModel = mongoose.model("course", coursesSchema);

module.exports = courseModel;
