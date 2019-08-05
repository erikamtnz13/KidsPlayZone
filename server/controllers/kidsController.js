const Kid = require('mongoose').model('Kid');
const path = require('path');
const models = require('../models');

module.exports = {

  findAll: (req, res) => {
      Kid.find({}, (err, kids) => {
        res.json({
          message: kids
        })
      })
      
    },


  update:  (req, res) => {
            console.log("inside update")
            let sampleFile = req.files.sampleFile
            console.log(sampleFile)
            console.log(req.body)
          if (!req.files.sampleFile)
              return res.status(400).send('No files were uploaded.');
          let kidPicture = req.files.sampleFile;
          let kidId = req.body.id;
          let imgPath = "/KidsImages/" + kidId + "_" + req.body.name + ".jpg";
  
          // Use the mv() method to place the file somewhere on your server
         sampleFile.mv(path.join(__dirname, "../kidsPictures" + imgPath), function (err) {

  
              if (err) {
                  return res.status(500).send(err);
              }
  
            Kid.findOneAndUpdate({_id: kidId}, {img: imgPath}, (err, kid) => {
              console.log(kid)
              res.json({
                message: kid
              })
              
          })
        
      })

    },

  findOne: (req, res) => {
    Kid.findById(req.params.id, (err, kid) => {
      if (err) console.log(err)
      res.json({
        message: kid
      })
    })
  }
}
