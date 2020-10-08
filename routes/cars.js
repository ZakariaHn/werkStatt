const router = require('express').Router();
const { getCarByOwner, getCars, addCar, getCarByChassyNr, deleteCar } = require('../controllers/carsController');

router.route('/').get(getCars);
router.route('/add').post(addCar);
router.route('/:chassyNr').post(getCarByChassyNr);
router.route('/:owner').post(getCarByOwner);
router.route('/:chassyNr').delete(deleteCar);

module.exports = router;