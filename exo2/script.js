//style.display masque le texte et n'alloue pas d'espace
// function hide() {
// document.getElementById("text").style.display = "none";
// }
// function hide() {
// document.getElementById("text").style.display  = "block";
// }

//style.visibility la disposition initiale est respectée
// function hide() {
// document.getElementById("text").style.visibility = "hidden";
// }
// function show() {
// document.getElementById("text").style.visibility = "visible";
// }

// 3eme Methode
  function showAndHideText(text) {
    if(text == 1){
      document.getElementById("text").style.visibility = "visible";
    }else if(text == 2){
      document.getElementById("text").style.visibility = "hidden";
    }
  }
