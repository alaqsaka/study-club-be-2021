module.exports = (app) => {
  const posts = require("../controllers/post.controller");
  const router = require("express").Router();

  router.get("/", posts.findAll);

  // Registrasikan route tersebut
  app.use("/api/posts", router);
};
