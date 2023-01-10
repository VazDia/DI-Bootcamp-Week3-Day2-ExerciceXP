//Retrieve the form and console.log it.

let form=document.forms[0];
console.log(form);

// Retrieve the inputs by their id and console.log them.

let firstInputById=document.forms[0].fname; // we could also use "document.forms[0].elements.fname"
let secondInputById=document.forms[0].lname; //....
let submitInputById=document.forms[0].submit; //...

console.log(firstInputById);
console.log(secondInputById);
console.log(submitInputById);

// Retrieve the inputs by their name attribute and console.log them.

let firstInputByName=document.forms[0].fname;
let secondInputByName=document.forms[0].lname;
let submitInputByValue=document.forms[0].Submit;

console.log(firstInputByName);
console.log(secondInputByName);
console.log(submitInputByValue);

/* When the user submits the form (ie. submit event listener)
use event.preventDefault(), why ?
get the values of the input tags,
make sure that they are not empty,
create an li per input value,
then append them to a the <ul class="usersAnswer"></ul>, below the form.*/

let line1=document.createElement("li");
let line2=document.createElement("li");
let Ul=document.querySelector(".usersAnswer");
Ul.appendChild(line1);
Ul.appendChild(line2);

form.addEventListener("submit",formFunction); // adding the event listener to the form

function formFunction(event){
        let firstName=firstInputById.value;
        let lastName=secondInputById.value;
        if (firstName.length===0){    // condition to force the user to enter something in the field
         alert("The first name's input field may not be empty");
         firstInputById.style.border="solid red"; // display a red color in the empty field to show the user where to fill 
        }
        else if (lastName.length===0) { // condition to force the user to enter something in the field
                alert("The last name's input field may not be empty")
                secondInputById.style.border="solid red";
        }
        else{  // We assign the inputs values into the each "li created before"
                line1.textContent=firstName;
                line2.textContent=lastName;
                event.preventDefault();     // This event for changing the fonction's behavior
        }
        
}

