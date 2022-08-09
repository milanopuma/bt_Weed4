const openbtn = document.querySelector(".btn-bar");
const closebtn = document.querySelector(".fa-xmark")
const slidebar = document.querySelector(".over-slidebar");

openbtn.addEventListener("click",function () {
    slidebar.classList.add("show-sidebar");
});

closebtn.addEventListener("click",function(){
    slidebar.classList.remove("show-sidebar");
});
