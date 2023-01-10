/*
Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.
Each listener should do a different thing, for instance - change position x, change position y, change color, change the font size… and more.
*/

let article=document.querySelector("article");
let bouton=document.getElementById("btn");
let boldItems=document.querySelectorAll("strong");


bouton.addEventListener("mouseover",changeButton)
bouton.addEventListener("mouseout", NormalButton);
bouton.addEventListener("click", ArticleItems);
bouton.addEventListener("dblclick",ChangeBoldItems);

function changeButton(){
    bouton.style.width="100px";
    bouton.style.height="40px";
    bouton.style.border="solid gray";
}

function NormalButton(){
    bouton.style.width="68px";
    bouton.style.height="21px";
    bouton.style.border="solid gray 0.3px";
    bouton.style.borderRadius="4px";
    bouton.textContent="Click me"
    article.style.backgroundColor="white"
}

function ArticleItems(e){
    bouton.style.width="100px";
    bouton.style.height="40px";
    bouton.style.border="solid blue";
    bouton.textContent="Double click";
    article.style.backgroundColor="blue";
    
}

function ChangeBoldItems(){
    bouton.style.width="100px";
    bouton.style.height="40px";
    bouton.style.border="solid green";
    article.style.backgroundColor="green";
    bouton.textContent="Click me"
}
