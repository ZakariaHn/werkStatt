const router = require("express").Router();
const { getData } = require("../controllers/searchController");

router.route("/").post(getData);

module.exports = router;