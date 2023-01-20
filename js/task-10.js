const createBoxesButton = document.querySelector(".data-create");
const destroyBoxesButton = document.querySelector(".data-destroy");
const input = document.querySelector("input");

const boxField = document.querySelector('#boxes');

let boxCount = 0; 

input.addEventListener("change", (event) => {
  boxCount = event.target.value;
    // console.log(boxCount)
});

createBoxesButton.addEventListener("click", (event) => {
  event.stopPropagation(); 
  // console.log(event, boxCount)
  if (boxCount > 0) {
    createBoxes(boxCount)
  }
  input.focus();
 
})

function createBoxes(amount) {

  for (let i = 0; i < amount; i++) {
    // create the box
    const box = document.createElement('div');
    const sizeOfBox = 30 + 10 * i;
    box.style.width = `${sizeOfBox}px`;
    box.style.height = `${sizeOfBox}px`;
    box.style.background = getRandomHexColor();
    box.style.margin = "10px";


    // add to existing boxes 
    boxField.append(box)
  }
}

destroyBoxesButton.addEventListener("click", () => {
    document.getElementById("boxes").outerHTML = "";

});



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6,0)}`;
}


