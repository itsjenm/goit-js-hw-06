const textInput = document.querySelector('#validation-input');



textInput.addEventListener("blur", () => {
   if (textInput.value.length  == textInput.getAttribute('data-length')) {
    textInput.style.borderColor = "#4caf50";
   } else if (textInput.value.length <= textInput.getAttribute('data-length')) {
    textInput.style.borderColor = "#f44336";
   } else {
      textInput.style.borderColor = '#f44336';
   }
  
});



 