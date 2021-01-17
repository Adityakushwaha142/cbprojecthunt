const Router = require("express");
const route = Router();
const { project } = require("../db/models");
route.get("/", async (req, res) => {
  const projects = await project.find({});

  res.status(200).send(projects);
});
route.post("/", async (req, res) => {
  console.log(req.body);
  const { id } = req.body;

  const projects = await project.findByIdAndUpdate(
    { _id: id },
    {
      $inc: { upvote: 1 },
    }
  );
  console.log("sucessfully updated");
});
/* async function upadate(id) {
  const projects = await project.findByIdAndUpdate(
    { _id: id },
    {
      $inc: { upvote: 1 },
    }
  );
  console.log("sucessfully updated");
}
upadate("600466399981064d50aae51a"); */

/* route.post("/", async (req, res) => {
  console.log(req.body);
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

  res.status(200).send(project1);
}); */
/* route.post("/", (req, res) => {
  const {
    devloper,
    title,
    description,
    youtubelink,
    githublink,
    deploylink,
  } = req.body;
  console.log(req.body);

  res.status(200).send("")
});
 */

module.exports = {
  projectroute: route,
};
