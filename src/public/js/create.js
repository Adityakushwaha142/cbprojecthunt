$(document).ready(function () {
  // Get value on button click and show alert
  $("#btn").click(function () {
    const userId = JSON.parse(window.localStorage.user).id;
    const title = $("#title").val();
    const body = $("#body").val();
    $.post("/api/posts", { userId, title, body }, (data) => {
      $("#content").load("../components/allposts.html");
    });
  });
});
