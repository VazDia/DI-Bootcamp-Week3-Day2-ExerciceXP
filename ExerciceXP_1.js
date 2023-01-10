// Using a DOM property, retrieve the h1 and console.log it.

let h1= document.querySelector("h1");
console.log(h1);

// Using DOM methods, remove the last paragraph in the <article> tag.

let article=document.querySelector("article");
article.lastElementChild.remove();


// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

let h2=document.querySelector("h2");
h2.addEventListener("click",ChangeH2Color); // We could also use "mousedown"

function ChangeH2Color(){
    h2.style.backgroundColor="red";
}

// Ajoutez un écouteur d'événement qui masquera le h3lorsqu'il est cliqué (utilisez la propriété display:none ).
let h3=document.querySelector("h3");
h3.addEventListener("click",HiddenH3)

function HiddenH3(){
    h3.style.display="none";
}



// Ajoutez un <button>au fichier HTML qui, une fois cliqué dessus, devrait mettre le texte de tous les paragraphes en gras.
let bouton=document.createElement("button");
bouton.innerHTML="Click me";
article.appendChild(bouton);
bouton.addEventListener("click",ChangeH2FontWeigth);

function ChangeH2FontWeigth(){
    article.style.fontWeight="bold";
}

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this

// h1 variable is already declared

h1.addEventListener("mouseover",sizeSeting);
function sizeSeting(){
    let radomSize=Math.floor(Math.random()*100) +1
    h1.style.fontSize=radomSize;
}
//BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

let queryAllP = document.querySelectorAll("p");
queryAllP[1].addEventListener("mouseover",fadP2In);
queryAllP[1].addEventListener("mouseout",fadP2out);

function fadP2In(){
    this.style.opacity="0.5";
}

function fadP2out(){
    this.style.opacity="1";
}


