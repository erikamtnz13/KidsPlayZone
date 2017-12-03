const express = require('express');
const router = new express.Router();
const Kid = require('mongoose').model('Kid');
const kidsController = require("../controllers/kidsController");



router.post('/upload', kidsController.update)

module.exports = router;
