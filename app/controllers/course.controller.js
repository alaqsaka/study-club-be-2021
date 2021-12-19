const db = require("../models");
const Course = db.courses;

// Find all courses in database
exports.findAll = (req, res) => {
  Course.find()
    .then((result) => {
      if (result.length == 0) {
        res.status(200).send({
          message: "Data is empty now, create a course to fill this db!",
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

// Adding new courses to database
exports.create = (req, res) => {
  const course = new Course({
    nameOfCourse: req.body.nameOfCourse,
    programmingLanguage: req.body.programmingLanguage,
    tools: req.body.tools,
    price: req.body.price,
    owner: req.body.owner,
  });

  // Fungsi untuk membuat dokumen ke course
  course
    .save(course)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || "Data course cannot be created!",
      });
    });
};

// Get specific course from db
exports.findOne = (req, res) => {
  const id = req.params.id;

  Course.findById(id)
    .then((result) => {
      if (!result) {
        res.status(404).send({
          success: false,
          message: "Data course cannot be found!",
        });
      } else {
        res.send(result);
      }
    })
    .catch((err) => {
      res.status(409).send({
        success: false,
        message: "Data error, please troubleshoot!",
      });
    });
};

// Update course
exports.update = (req, res) => {
  const id = req.params.id;

  Course.findByIdAndUpdate(id, req.body)
    .then((result) => {
      // Jika engga ada kirim 404
      if (!result) {
        res.status(404).send({
          success: false,
          data: {
            message: `Data ${id} cannot be found!`,
          },
        });
      }

      // Jika ada
      res.send({
        message: `Sucessfully update <objectItemName>!`,
      });
    })
    .catch((err) => {
      res.status(409).send({
        success: false,
        message: "Data error, please troubleshoot!",
      });
    });
};

// Delete course
exports.delete = (req, res) => {
  const id = req.params.id;

  Course.findByIdAndRemove(id)
    .then((result) => {
      if (!result) {
        res.status(404).send({
          success: false,
          data: {
            message: "Data <objectItemName> cannot be found!",
          },
        });
      }

      // Jika ada
      res.send({
        success: true,
        data: "Data <objectItemName> successfully deleted!",
      });
    })
    .catch((err) => {
      res.status(409).send({
        success: false,
        message: "Data error, please troubleshoot!",
      });
    });
};
