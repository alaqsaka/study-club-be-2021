module.exports = (app) => {
  const courses = require("../controllers/course.controller");
  const router = require("express").Router();

  router.get("/", courses.findAll);
  router.post("/", courses.create);
  router.get("/:id", courses.findOne);
  router.put("/:id", courses.update);
  router.delete("/:id", courses.delete);

  app.use("/api/courses", router);
};
