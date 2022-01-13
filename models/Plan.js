const { model, Schema } = require("mongoose");

const planSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name required!"],
    },
    details: {
      type: String,
      required: [true, "Description required!"],
    },
    pricePerMonth: {
      type: Number,
      required: [true, "Procedures required!"],
    },
  },
  { timestamps: true }
);

module.exports = model("Plan", planSchema);
