var myForm = document.getElementById("myForm");
var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var wrongInput = document.getElementById("wrongInput");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


// function ValidateEmail(){
//    if(emailInput.value.match(mailformat)){
//       emailInput.style.borderBottomColor = "#4EE1A0";
//       wrongInput.style.display="none";
//    //  alert("Thank you for contacting me!");
//     return true;
//    }else{
//       emailInput.style.borderBottomColor = "#FF6F5B";
//       wrongInput.style.display="flex";
//       // alert("You have entered an invalid email address!");
//       emailInput.focus();
//       return false;
//    }
// }

nameInput.addEventListener("input", validate);
emailInput.addEventListener("input", validate);

function validate(e) {
 let target = e.target;

 if(target.name == "name"){
   if(target.value.length > 3){
      target.style.borderBottomColor = "#4EE1A0";
   }else{
      target.style.borderBottomColor = "#FF6F5B";
   }
 }if(target.name == "email"){
   if(mailformat.test(target.value)){
      target.style.borderBottomColor = "#4EE1A0";
      wrongInput.style.display = "none";
      target.style.borderBottomColor = "fff";
   }else{
      target.style.borderBottomColor = "#FF6F5B";
      wrongInput.style.display = "flex"
   }
 }
}