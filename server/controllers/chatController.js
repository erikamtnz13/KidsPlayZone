const Chat = require('mongoose').model('Chat');

module.exports = {

  findAll: (req, res) => {
      Chat.find({}, (err, chats) => {
        res.json({
          chat: chats
        })
      })
      
    },

    insertMessage: (req, res) => {
      
        Chat.create(req.body, function (err, data) {
            if (err) res.json(err);
            res.json(data)
            })
    }

   
}