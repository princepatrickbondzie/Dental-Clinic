const router = require("express").Router();
const planCtrl = require("../controllers/planCtrl");

router.get("/plans", planCtrl.getPlans);
router.get("/plan/:id", planCtrl.getPlan);
router.post("/plan", planCtrl.createPlan);
router.patch("/plan/:id", planCtrl.updatePlan);
router.delete("/plan/:id", planCtrl.deletePlan);

module.exports = router;