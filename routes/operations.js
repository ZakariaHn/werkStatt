const router = require('express').Router();
const { getOperations, addOperation } = require('../controllers/operationsController');

router.route('/').get(getOperations);
router.route('/add').post(addOperation);

module.exports = router;