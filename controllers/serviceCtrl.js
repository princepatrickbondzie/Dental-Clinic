const Service = require('../models/Service');

const getServices = async (req, res) => {
  const services = await Service.find();
  res.status(200).json({ services });
};

const getService = async (req, res) => {
  const id = req.params;
  const service = await Service.findById(id);
  res.status(200).json({ service });
};

const createService = async (req, res) => {
  console.log(req.body);
  try {
    const service = await Service.create({ ...req.body, image: req.file.path });
    res.status(201).json({ service });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateService = async (req, res) => {
  const id = req.params;
  const service = await Service.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({ service });
};

const deleteService = async (req, res) => {
  const id = req.params;
  await Service.findByIdAndDelete(id);
  res.status(200).json({ message: "Doctor deleted Successfully!" });
};

module.exports = {
  getService,
  getServices,
  createService,
  updateService,
  deleteService,
};
