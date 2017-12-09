const express = require('express');
const router = new express.Router();
const Kid = require('mongoose').model('Kid');
const kidsController = require("../controllers/kidsController");
const chatController = require("../controllers/chatController");


router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

// kidsController.findOne


router.get('/members', kidsController.findAll)

router.get('/members/:id', kidsController.findOne)




router.get('/chat', chatController.findAll)

router.post('/chat', chatController.insertMessage)


module.exports = router;