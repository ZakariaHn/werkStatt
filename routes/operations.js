const router = require("express").Router();
const {
  getOperations,
  addOperation,
  deleteOperation,
  updateOperation,
  getCarOperations
} = require("../controllers/operationsController");

router.route("/").get(getOperations);
router.route("/:_id").get(getCarOperations);
router.route("/add").post(addOperation);
router.route("/delete/:_id").delete(deleteOperation);
router.route("/update/:_id").patch(updateOperation);

module.exports = router;
