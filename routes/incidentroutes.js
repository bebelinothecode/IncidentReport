const express = require('express');
const router = express.Router();

const {createPost,getweather} = require('../controller/incidentreport');

router.route('/createpost').post(createPost);
router.route('/weather').post(getweather);
module.exports = router;