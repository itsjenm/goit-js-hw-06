//create a counterValue variable that will store the current counter value and initialize it with 0 
const incrementButton = document.querySelector('button[data-action="increment"]')
const decrementButton = document.querySelector('button[data-action="decrement"]')
let counterValue = document.getElementById('value');

//track count with variable
let currentCounter = 0;

//display count in the DOM
counterValue.innerHTML = currentCounter;

//add listeners for clicks on the buttons, inside them, increase or decrease the value of the counter

const handleIncrement = () => {
    currentCounter++
    counterValue.innerHTML = currentCounter;
    
}

const handleDecrement = () => {
    currentCounter--;
    counterValue.innerHTML = currentCounter;
}

//update the interface with the new value of the variable counterValue
incrementButton.addEventListener("click", handleIncrement);
decrementButton.addEventListener("click", handleDecrement);
