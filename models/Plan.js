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
    // pricePerYear: {
    //   type: String,
    //   required: [true, "Image required!"],
    // },
  },
  { timestamps: true }
);

module.exports = model("Plan", planSchema);
