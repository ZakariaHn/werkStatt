const router = require("express").Router();
const { getData } = require("../controllers/searchController");

router.route("/").get(getData);

module.exports = router;
