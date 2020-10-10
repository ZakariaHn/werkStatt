// everything from here on starts with the prefix : http://localhost:5000/api/clients/add
const router = require("express").Router();
const {
  addClient,
  getClients,
  getClient,
  deleteClient,
  updateClient,
} = require("../controllers/clientsController");

router.route("/").get(getClients);
router.route("/add").post(addClient);
router.route("/:lastName").get(getClient);
router.route("/:lastName").delete(deleteClient);
router.route("/:lastName").put(updateClient);

module.exports = router;
