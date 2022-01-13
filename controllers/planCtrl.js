const Plan = require("../models/Plan");

const getPlans = async (req, res) => {
  const plans = await Plan.find();
  res.status(200).json({ plans });
};

const getPlan = async (req, res) => {
  const id = req.params;
  const plan = await Plan.findById(id);
  res.status(200).json({ plan });
};

const createPlan = async (req, res) => {
  const name = req.body.name;
  const details = req.body.details;
  const pricePerMonth = req.body.pricePerMonth;
  const plan = Plan.create({ name, details, pricePerMonth });
  res.status(400).json({ plan });
  console.log(req.body);
};

const updatePlan = async (req, res) => {
  const id = req.params;
  const plan = await Plan.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({ plan });
};

const deletePlan = async (req, res) => {
  const id = req.params;
  await Plan.findByIdAndDelete(id);
  res.status(200).json({ message: "Plan deleted Successfully!" });
};

module.exports = {
  getPlan,
  getPlans,
  createPlan,
  updatePlan,
  deletePlan,
};
