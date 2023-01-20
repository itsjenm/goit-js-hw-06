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
})

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    // create the box
    const box = document.createElement('div');
    box.style.width = "30px";
    box.style.height = "30px";
    box.style.background = "slateblue";
    box.style.margin = "10px";

    // add to existing boxes 
    boxField.append(box)
  }
}

destroyBoxesButton.addEventListener("click", () => {
  const allChild = boxField.children;
  const allBoxes = allChild.length; 

  console.log(allChild)
  console.log(allBoxes)

  for (let i = 0; i < allBoxes; --i) {
    const current = allChild[i]
    current.remove();
    
  }
});



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


