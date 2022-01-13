const router = require("express").Router();
const doctorCtrl = require("../controllers/doctorCtrl");
const upload = require("../upload/upload");

router.get("/doctors", doctorCtrl.getDoctors);
router.get("/doctor/:id", doctorCtrl.getDoctor);
router.post("/doctor", upload.single("picture"), doctorCtrl.createDoctor);
router.patch("/doctor/:id", doctorCtrl.updateDoctor);
router.delete("/doctor/:id", doctorCtrl.deleteDoctor);

module.exports = router;
