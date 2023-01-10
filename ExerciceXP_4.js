//Write a JavaScript program to calculate the volume of a sphere

let form=document.forms[0];
let radiusField=form.radius;
let volumeField=form.volume;
let submitButton=form.sumit;

form.addEventListener("submit",calculateVolume);
function calculateVolume(event){
    let radiusvalue=radiusField.value; // fetching the radius value
    let pi=Math.PI;  
    let sphereVolume = (4*pi*(radiusvalue**3)) / 3   // How to calculate the sphere volume
    volumeField.value=sphereVolume; // assigning the calculated value to volume's value;
    event.preventDefault();
}

// 113.09733552923255