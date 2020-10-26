// everything from here on starts with the prefix : http://localhost:5000/api/clients/delete/:id
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
router.route("/:_id").get(getClient);
router.route("/delete/:_id").delete(deleteClient);
router.route("/update/:_id").patch(updateClient);

module.exports = router;
