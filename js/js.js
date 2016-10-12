document.addEventListener("DOMContentLoaded", function () {


//modal visible/hidden

var modal=document.querySelector(".modal");
var link=document.querySelector('.eva');

link.addEventListener("click", function(){

  modal.classList.remove("hidden");

}, false);

document.addEventListener("keyup", function(evt){
  if(evt.keyCode===27) {
    modal.classList.add("hidden");
  }

}, false);





});
