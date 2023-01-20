
//call to the dom
const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output')

//input event
textInput.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value;
    if (output.textContent === "") {
        return output.textContent = "Anonymous";
    }
});

//other solution
// function setOutput() {
//     const textInput = input.value;
//     header.textContent = textInput;
//     if (textInput === "") {
//         return header.textContent = "Anonymous";
//     }
// }

