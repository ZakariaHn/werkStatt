const router = require('express').Router();
const { getCarByOwner, getCars, addCar, getCarByChassyNr } = require('../controllers/carsController');

router.route('/').get(getCars);
router.route('/:chassyNr').post(getCarByChassyNr);
router.route('/:owner').post(getCarByOwner);
router.route('/add').post(addCar);

module.exports = router;