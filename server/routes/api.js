const express = require('express');
const router = new express.Router();
const Kid = require('mongoose').model('Kid');
const kidsController = require("../controllers/kidsController");


router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

router.get('/members', kidsController.findAll)


module.exports = router;