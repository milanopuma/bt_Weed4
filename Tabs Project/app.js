const btns = document.querySelectorAll(".btn");
const articles = document.querySelectorAll(".text");
const about = document.querySelector(".about");

about.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
      // remove selected from other buttons
      btns.forEach(function (btn) {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      // hide other articles
      articles.forEach(function (articles) {
        articles.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });

// btns.forEach(function(e)
// {
//     e.addEventListener("click",openTab);
// })

// function openTab(e){
    
//     articles.forEach(function(e)
//     {
//         e.classList.remove("active");
//     });

//     btns.forEach(function (e)
//     {
//         e.classList.remove("active");
//     });

// }