const { model, Schema } = require("mongoose");

const serviceSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name required!"],
    },
    description: {
      type: String,
      required: [true, "Description required!"],
    },
    procedures: {
      type: String,
      required: [true, "Procedures required!"],
    },
    image: {
      type: String,
      required: [true, "Image required!"],
    },
  },
  { timestamps: true }
);

module.exports = model("Service", serviceSchema);
