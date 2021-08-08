var password1 = document.getElementById("inputPassword1");
var password2 = document.getElementById("inputPassword2");

// function passwordValidation() {
//   if (password1.value != password2.value) {
//     document.getElementById("inputPassword1").style.border = "2px solid red";
//     document.getElementById("inputPassword2").style.border = "2px solid red";
// }else {
//   document.getElementById("inputPassword1").style.border = "2px solid green";
//   document.getElementById("inputPassword2").style.border = "2px solid green";
// }
// }

function passwordValidation(){
    var password1 = document.getElementById("inputPassword1");
    var password2 = document.getElementById("inputPassword2");
    if (password1.value == '' || password2.value == ''){
      alert("Veuillez saisir un mot de passe");
    }else if (password1.value != password2.value){
      document.getElementById("inputPassword1").style.border = document.getElementById("inputPassword2").style.border = "2px solid red";
    }else {
      document.getElementById("inputPassword1").style.border = document.getElementById("inputPassword2").style.border = "2px solid green";
    }
  }
