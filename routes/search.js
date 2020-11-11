const router = require("express").Router();

const {
  getCarData,
  getClientData,
} = require("../controllers/searchController");

router.route("/").get(getCarData);
router.route("/").get(getClientData);

module.exports = router;
