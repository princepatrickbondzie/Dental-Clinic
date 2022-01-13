const Doctor = require("../models/Doctor");

const getDoctors = async (req, res) => {
  const doctors = await Doctor.find();
  res.status(200).json({ doctors });
};

const getDoctor = async (req, res) => {
  const id = req.params;
  const doctor = await Doctor.findById(id);
  res.status(200).json({ doctor });
};

const createDoctor = async (req, res) => {
  console.log(req.body);
  try {
    const doctor = await Doctor.create({ ...req.body, image: req.file.path });
    res.status(201).json({ doctor });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateDoctor = async (req, res) => {
  const id = req.params;
  const doctor = await Doctor.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({ doctor });
};

const deleteDoctor = async (req, res) => {
  const id = req.params;
  await Doctor.findByIdAndDelete(id);
  res.status(200).json({ message: "Doctor deleted Successfully!" });
};

module.exports = {
  getDoctor,
  getDoctors,
  createDoctor,
  updateDoctor,
  deleteDoctor,
};
