const express = require("express");
const app = express();
const path = require("path");
const { project } = require("./src/db/models");
const PORT = process.env.PORT || 3000;

const { projectroute } = require("./src/routes/project");

app.set("views", path.join(__dirname, "/src/public/views"));
app.use(express.static(path.join(__dirname, "/src/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "hbs");
app.get("/", (req, res) => {
  res.render("index.hbs");
});
app.get("/trending", (req, res) => {
  res.render("allprojects.hbs");
});

/*    CREATE ROUTES  */
app.use("/api/projects", projectroute);

app.get("/create", (req, res) => {
  res.render("create.hbs");
});
app.get("/projects", (req, res) => {
  res.render("allprojects.hbs");
});

app.post("/create", async (req, res) => {
  console.log(req.body);

  console.log(req.body);
  const project1 = new project({
    name: "project",
    devloper: req.body.devloper,
    title: req.body.title,
    description: req.body.description,
    youtubelink: req.body.youtubelink,
    githublink: req.body.githublink,
    deploylink: req.body.deploylink,
    upvote: 0,
    downvote: 0,
  });
  project1.save();

  res.redirect("/projects");
});

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
