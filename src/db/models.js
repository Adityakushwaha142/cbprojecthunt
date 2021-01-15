const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/producthunt", {
    useNewUrlParser: true,
  })
  .then(() => {
    "connecting to db..";
  })
  .catch((err) => {
    console.log(err);
  });

const userschema = new mongoose.Schema({
  name: String,
  password: String,
});

const user = mongoose.model("user", userschema);

const projectschema = new mongoose.Schema({
  name: String,
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    minLength: 5,
    maxlength: 255,
    required: true,
  },
  youtubelink: String,
  githublink: {
    type: String,
    min: 5,
    max: 255,
    required: true,
  },
  deploylink: {
    type: String,
    min: 5,
    max: 255,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  upvote: Number,
  downvote: Number,
});
const project = mongoose.model("project", projectschema);

module.exports = {
  user,
  project,
};
