const { model, Schema } = require("mongoose");

const timetableSchema = new Schema(
  {
    sunday: {
      type: String,
      default: "Closed",
    },
    monday: {
      type: String,
      required: true,
    },
    tuesday: {
      type: String,
      required: true,
    },
    wednesday: {
      type: String,
      required: true,
    },
    thursday: {
      type: String,
      required: true,
    },
    friday: {
      type: String,
      required: true,
    },
    saturday: {
      type: String,
      default: "Closed",
    },
  },
  { timestamps: true }
);

module.exports = model("TimeTable", timetableSchema);
