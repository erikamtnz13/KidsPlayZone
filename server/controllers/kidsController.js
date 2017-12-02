const Kid = require('mongoose').model('Kid');

module.exports = {

  findAll: (req, res) => {
      Kid.find({}, (err, kids) => {
        res.json({
          message: kids
        })
      })
      
    },


  update:  (req, res) => {
  
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
  
            Kid.findOneAndUpdate({id: kidId}, {img: imgPath}, (err, kids) => {
              res.json({
                message: kids
              })
              
          })
        
      })
    }

  }