const Timetable = require("../models/Timetable");

// const getAllTimetable = async (req, res) => {
//   const timetable = await Timetable.find();
//   res.status(200).json({ timetables });
// };

const getTimetable = async (req, res) => {
  const id = req.params;
  const timetable = await Timetable.findById(id);
  res.status(200).json({ timetable });
};

const createTimetable = async (req, res) => {
  const sunday = req.body.sunday;
  const monday = req.body.monday;
  const tuesday = req.body.tuesday;
  const wednesday = req.body.wednesday;
  const thursday = req.body.thursday;
  const friday = req.body.friday;
  const saturday = req.body.saturday;

  const timetable = Timetable.create({
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
  });
  // timetable.save();
  res.status(400).json({ timetable });
  console.log(req.body);
};

const updateTimetable = async (req, res) => {
  const id = req.params;
  const timetable = await Plan.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({ timetable });
};

const deleteTimetable = async (req, res) => {
  const id = req.params;
  await Timetable.findByIdAndDelete(id);
  res.status(200).json({ message: "Timetable deleted Successfully!" });
};

module.exports = {
  getTimetable,
  createTimetable,
  updateTimetable,
  deleteTimetable,
};
