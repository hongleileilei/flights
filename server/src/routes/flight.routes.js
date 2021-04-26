const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flight.controller');

router.get('/',flightController.findAll);
module.exports=router