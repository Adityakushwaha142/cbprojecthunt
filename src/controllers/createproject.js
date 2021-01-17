const { project } = require("../db/models");

/* async function createproject() {
  const project1 = new project({
    name: "project",
    devloper: req.body.devloper,
    title: req.body.title,
    description: req.body.description,
    youtubelink: req.body.youtubelink,
    githublink: req.body.githublink,
    deploylink: req.body.deploylink,
  });
  project1.save();
}
createproject();
 */
async function upadate(id) {
  const projects = await project.findByIdAndUpdate(
    { _id: id },
    {
      $inc: { upvote: 1 },
    }
  );
  console.log("sucessfully updated");
}
upadate("600466399981064d50aae51a");
