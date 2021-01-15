const { project } = require("../db/models");
async function getproject() {
  const projects = await project.find({});
  console.log(projects);
}
getproject();
