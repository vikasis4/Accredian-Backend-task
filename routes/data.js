const express = require('express');

const router = express.Router();
const {getData, postData} = require('../controllers/data')

router.route('/postData').post(postData);
router.route('/getData').post(getData);

module.exports = router