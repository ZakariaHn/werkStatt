const router = require("express").Router();
const {
  getCarByOwner,
  getCars,
  addCar,
  getCarByChassyNr,
  deleteCar,
  updateCar,
} = require("../controllers/carsController");

router.route("/").get(getCars);
router.route("/add").post(addCar);
router.route("/chassynr/:_id").get(getCarByChassyNr);
router.route("/owner/:owner").get(getCarByOwner);
router.route("/delete/:_id").delete(deleteCar);
router.route("/update/:_id").patch(updateCar);

module.exports = router;
