const { mongoose } = require(".");

module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      nameOfCourse: String,
      programmingLanguage: Object,
      tools: Object,
      price: Number,
      createdAt: Date,
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

  const Post = mongoose.model("posts", schema);
  return Post;
};
