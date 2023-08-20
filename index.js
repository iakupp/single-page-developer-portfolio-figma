function ValidateEmail(inputText)
{
   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(inputText.value.match(mailformat))
   {
    alert("Thank you for contacting me!");
    return true;
   }
   else
   {
      alert("You have entered an invalid email address!");
      document.myForm.email.focus();
      return false;
   }
}