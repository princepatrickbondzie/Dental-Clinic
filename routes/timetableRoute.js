const router = require("express").Router();
const timetableCtrl = require("../controllers/timetableCtrl");

router.get("/timetable/:id", timetableCtrl.getTimetable);
router.post("/timetable", timetableCtrl.createTimetable);
router.patch("/timetable/:id", timetableCtrl.updateTimetable);
router.delete("/timetable/:id", timetableCtrl.deleteTimetable);

module.exports = router;
