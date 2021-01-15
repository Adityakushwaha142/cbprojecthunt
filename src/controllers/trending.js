const { project } = require("../db/models");
async function getproject() {
  const projects = await project
    .find({ name: "project" })
    .limit(2)
    .sort({ downvote: 1 })
    .sort({ upvote: -1 })
    .select("downvote upvote");
  console.log(projects);
}
getproject();
