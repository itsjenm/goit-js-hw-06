//respond to changes in the value of input#font-size-control input event
//can't use querySelector - returns null 
const slider = document.getElementById("font-size-control");

slider.addEventListener('input', function() {
    let size = slider.value;
    //when you change the slider. this changes the text size 
    document.getElementById('text').style.fontSize = size + "px";
});

