const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

//call gallery 
const gallery = document.querySelector(".gallery");
gallery.style.display = "flex";



images.forEach((image) => {
  updatePhoto(image)
});


function updatePhoto(image) {
  //create elements 
  let photo = document.createElement("img");
  let li = document.createElement("li");

  //Assign source to each image
  photo.src = image.url;
  photo.alt = image.alt;

  //add elements to the DOM
  li.appendChild(photo);
  gallery.appendChild(li);

  //style each image 
  photo.style.width = "300px";
  photo.style.height = "200px"
  photo.style.border = "5px solid #ddd";

  li.style.listStyle = "none";
}


gallery.insertAdjacentHTML("beforebegin", "<h2>Photo Gallery</h2>");



// console.log(gallery)
