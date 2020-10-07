// everything from here on starts with the prefix : http://localhost:5000/api/clients/add
const router = require('express').Router();
const { addClient, getClients, getClient } = require('../controllers/clientsController');

router.route('/').get(getClients);
router.route('/:id').get(getClient);
router.route('/add').post(addClient);

module.exports = router;