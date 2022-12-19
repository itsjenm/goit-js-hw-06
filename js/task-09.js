const button = document.querySelector('.change-color');
const color = document.querySelector('.color');

button.addEventListener("click", getRandomHexColor);


function getRandomHexColor() {
  let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.body.style.backgroundColor = randomColor; 
  color.textContent = randomColor; 
  return;
}


