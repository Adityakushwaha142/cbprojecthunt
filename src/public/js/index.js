$(() => {
  $(".trending").load("../components/trending.html");
  $(".other").load("../components/other.html");
  $("#footer").load("../components/footer.html");
});
/* 
$(".trendingbtn").click(function () {
  $.get("/trending", function (data, status) {
    console.log("rendering trending page ");
  });
}); */
