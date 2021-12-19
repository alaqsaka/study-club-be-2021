const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Database terhubung`);
  })
  .catch((err) => {
    console.log(`Tidak berhasil terhubung dengan database.`, err);
    process.exit();
  });

// Entrypoint pertama. URL pertama untuk ROOT domain.
app.get("/", (req, res) => {
  res.json({
    message: "API Final Project Study Club KSM",
  });
});

// Get request to get posts
require("./app/routes/post.routes")(app);
// Get request to get all courses available
require("./app/routes/course.routes")(app);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
