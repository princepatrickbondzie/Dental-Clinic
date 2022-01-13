const { model, Schema } = require("mongoose");

const doctorSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name required!"],
    },
    title: {
      type: String,
      required: [true, "Title required!"],
    },
    yearsOfWorkingWithUs: {
      type: String,
      required: [true, "Description required!"],
    },
    experience: {
      type: String,
      required: [true, "Procedures required!"],
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = model("Doctor", doctorSchema);
