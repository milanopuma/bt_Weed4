function opentab(){
  document.getElementById('over').style.display="grid"
  document.querySelector('.slider').style.background="rgba(73, 166, 233, 0.2)";
  document.querySelector('.header').style.background="rgba(73, 166, 233, 0.5)";
}

function closetab(){
  document.getElementById('over').style.display="none"
  document.querySelector('.slider').style.background="#fff"
  document.querySelector('.header').style.background="none";
}