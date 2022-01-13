const router = require("express").Router();
const serviceCtrl = require("../controllers/serviceCtrl");
const upload = require("../upload/upload");

router.get("/services", serviceCtrl.getServices);
router.get("/service/:id", serviceCtrl.getService);
router.post("/service", upload.single("picture"), serviceCtrl.createService);
router.patch("/service/:id", serviceCtrl.updateService);
router.delete("/service/:id", serviceCtrl.deleteService);

module.exports = router;
