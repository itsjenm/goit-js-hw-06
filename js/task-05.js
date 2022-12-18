
const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output')


textInput.addEventListener("change", (event) => {
    output.textContent = event.currentTarget.value;
    if (output.textContent === "") {
        return output.textContent = "Anonymous";
    }
});


// function setOutput() {
//     const textInput = input.value;
//     header.textContent = textInput;
//     if (textInput === "") {
//         return header.textContent = "Anonymous";
//     }
// }



console.log(output) 
