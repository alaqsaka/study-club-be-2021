const db = require("../models");
const Post = db.posts; // Ini ngikutin namanya dari database

// Mendapatkan seluruh data yang ada di database
exports.findAll = (req, res) => {
  Post.find()
    .then((result) => {
      if (result.length == 0) {
        res.status(200).send({
          message: "Data is empty now, create a <object> to fill this db!",
        });
      } else {
        res.status(200).send(result);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Data error, please troubleshoot!. ${err.message}`,
      });
    });
};
