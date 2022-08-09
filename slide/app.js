const slides = document.querySelectorAll('.slide')
const prevbtn = document.querySelector('.prev-btn')
const nextbtn = document.querySelector('.next-btn');

slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
    console.log(index);

  });
  let counter= 0;
  console.log(counter);
function increase() {
   counter=counter+1;
 
   carousel();
   
}
function decrease()
{
    counter=counter-1;

    carousel();
   
}

function carousel() {

        if (counter < 0) {
          counter = 0;
        }
        if (counter < slides.length - 1) {
          nextbtn.style.display = "block";
        } else {
          nextbtn.style.display = "none";
        }
        if (counter > 0) {
          prevbtn.style.display = "block";
          
        } else {
          prevbtn.style.display = "none";
        }
        slides.forEach(function (slide) {
          console.log(1);
          slide.style.transform = `translateX(-${counter * 100}%)`;
        });
  
      
}

prevbtn.style.display = "none";