const mongoose = require('mongoose');

// define the User model schema
const ChatSchema = new mongoose.Schema({
    name: {
        type: String,
      },
    message: {
      type: String,
    },
    createdAt: { type: Date, default: Date.now, expires: '1h' }

  });

  const Chat = mongoose.model('Chat', ChatSchema);
  module.exports = Chat 