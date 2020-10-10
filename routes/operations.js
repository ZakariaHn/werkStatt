const router = require("express").Router();
const {
  getOperations,
  addOperation,
  deleteOperation,
  updateOperation,
} = require("../controllers/operationsController");

router.route("/").get(getOperations);
router.route("/add").post(addOperation);
router.route("/:name").delete(deleteOperation);
router.route("/:name").put(updateOperation);

module.exports = router;
