// Declare a global variable named allBoldItems.

var allBoldItems;
/*Create a function called getBold_items() that takes no parameter.
 This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.*/

function getBold_items(){
    let collectBoldItems=document.querySelectorAll("strong");
    allBoldItems=collectBoldItems;
    return allBoldItems;
}

// Create a function called highlight() that changes the color of all the bold text to blue.

function highlight(){
    let changeBoldItemsColor=getBold_items(); 
    changeBoldItemsColor.forEach(item => item.style.color="blue");
}

// Create a function called return_normal() that changes the color of all the bold text back to black.
function return_normal(){
    let normalBoldItems=getBold_items();
    normalBoldItems.forEach(item => item.style.color="black")
}

/* Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph),
 and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph)*/

 let paragraph = document.querySelector("p");
 paragraph.addEventListener("mousemove",highlight);
 paragraph.addEventListener("mouseout",return_normal);