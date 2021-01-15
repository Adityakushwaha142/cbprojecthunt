const { project } = require("../db/models");
async function createproject() {
  const project1 = new project({
    name: "project",
    title: "My first  project",
    description: "MY FIRST DESCRIPZTION ",
    youtubelink: "https://www.youtube.com/watch?v=DZC7zzgtPwM",
    githublink: "https://www.producthunt.com/",
    deploylink:
      "https://www.notion.so/Product-Brief-b65e74d1949d4b169e9c51e0884c8d9e",
    upvote: 150000000,
    downvote: 500,
  });
  project1.save();
}
createproject();
