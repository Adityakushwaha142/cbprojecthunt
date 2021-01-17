$(() => {
  function click() {
    console.log("apple");
    alert("I am clicked");
    const id = $(this).attr("id");
    console.log(id);
    $.post("/api/projects", { id }, () => {
      console.log("succesfully updated data ");
    });
  }
});
