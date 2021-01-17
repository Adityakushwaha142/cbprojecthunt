$(() => {
  function loadallprojects() {
    $.get("/api/projects", (projects) => {
      let i = 0;
      for (let p of projects) {
        console.log(p._id);
        if (i == 0) {
          $(".bigcontainer").append(`
        
           
    <div   class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
    <div class="col-md-6 px-0">
        <h1 class="display-4 font-italic">${p.title}</h1>
        <p class="lead my-3">${p.description}</p>
        <p class="lead mb-0"><a href="#" class="text-white font-weight-bold">Continue reading...</a></p>

        <div class="mr-4 mt-4 ml-4 ">
        <button id="upvotebtn" /*id=${p._id}*/ class="btn btn-sm btn-outline-secondary" >Upvote:  ${p.upvote}

        </button>
        </div>
    </div>

</div>
           `);
        } else {
          $(".smallcontainer").append(`<div class="row mb-2">
          <div   class="col-md-12">
              <div class="card flex-md-row mb-4 box-shadow h-md-250">
                  <div class="card-body d-flex flex-column align-items-start">
                      <strong class="d-inline-block mb-2 text-primary">${p.title}</strong>
                      <h3 class="mb-0">
                          <a class="text-dark" href="#">Featured post</a>
                      </h3>
                      <div class="mb-1 text-muted">Nov 12</div>
                      <p class="card-text mb-auto">${p.description}.</p>
                      <a href="#">Continue reading</a>
                  </div>
                  <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb"
                      alt="Card image cap">
                      <div class="mr-4 mt-4 ml-4 ">
                      <button id="upvotebtn"  /* id=${p._id} */ class="btn btn-sm btn-outline-secondary" >Upvote:  ${p.upvote}

                      </button>
                      </div>
      
              </div>
          </div>
          `);
        }
        i++;
      }
    });
  }

  loadallprojects();
});
