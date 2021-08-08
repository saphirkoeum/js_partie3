// function bordered() {
//   document.getElementById("image1").style.border = "2px solid red";
// }
// function unBordered() {
//   document.getElementById("image1").style.border = "none";
// }

//2nd methode
var img = document.querySelector('img');

img.addEventListener("mouseover", function (){
  this.style.border = "3px solid red";
});
img.addEventListener("mouseout", function (){
  this.style.border = "";
});
