const getStaffs = async (req, res) => {
  const staffs = await Staff.find();
  res.status(400).json({ staffs });
};

const getStaff = async (res, req) => {
  const id = req.params;
  const staff = await Staff.findById(id);
  res.status(200).json({ staff });
};

const craeteStaff = async (res, req) => {
  const name = req.body.name;
  const post = req.body.post;
  const department = req.body.department;

  const staff = await Staff.create({ name, post, department });
  res.status(400).json({ staff });
};

const updateStaff = async (req, res) => {
  const id = req.params;
  const staff = await Staff.findByIdAndUpdate(id);
  res.status(400).json({ staff });
};

const deleteStaff = async (req, res) => {
  const id = req.params;
  await Staff.findByIdAndDelete(id);
  res.status(201).json({ message: "Staff deleted!!!!!" });
};

module.exports = {
  getStaff,
  getStaffs,
  craeteStaff,
  updateStaff,
  deleteStaff,
};
