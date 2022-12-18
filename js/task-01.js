function listCounter() {
    const listItems = document.querySelectorAll(".item");
    console.log(`Number of categories: ${listItems.length}`);
    
    for (let i = 0; i < listItems.length; i++) {
       console.log(`Category: ${listItems[i].querySelector("h2").innerText}`);
       console.log(`Elements: ${listItems[i].getElementsByTagName("li").length}`);
    }
}

listCounter();
