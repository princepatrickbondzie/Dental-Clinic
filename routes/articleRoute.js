const router = require("express").Router();
const articleCtrl = require("../controllers/articleCtrl");
const upload = require("../upload/upload");

router.get("/articles", articleCtrl.getArticle);
router.get("/article/:id", articleCtrl.getArticle);
router.post("/article", upload.single("picture"), articleCtrl.createArticle);
router.patch("/article/:id", articleCtrl.updateArticle);
router.delete("/article/:id", articleCtrl.deleteArticle);

module.exports = router;
