$(() => {
  $(".trending").load("../components/trending.html");
  $(".other").load("../components/other.html");
  $("#footer").load("../components/footer.html");
});

$(".trendingbtn").onclick(() => {
  $(".trending").load("../components/trending.html");
  $(".other").load("../components/other.html");
});
