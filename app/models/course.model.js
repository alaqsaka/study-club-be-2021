const { mongoose } = require(".");

module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      nameOfCourse: String,
      programmingLanguage: Object,
      tools: Object,
      price: Number,
      owner: String,
    },
    {
      timestamps: true,
    }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Course = mongoose.model("courses", schema);
  return Course;
};
