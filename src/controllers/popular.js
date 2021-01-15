const { project } = require("../db/models");
async function getproject() {
  const projects = await project
    .find({ name: "project" })
    .limit(10)

    .sort({ upvote: -1 })
    .select(" upvote");
  console.log(projects);
}
getproject();
