var animalimg = document.querySelector("#fav-animal");
var btnerase1 = document.querySelector("#btn1");
var btnerase2 = document.querySelector("#btn2");
var colora = document.querySelector("body")
console.log(animalimg);

function pickcat(element){
    element.style.backgroundColor = "goldenrod"
    animalimg.src = "images/todd-s.jpg"
    btnerase2.style.backgroundColor = "white"
    colora.style = "rebeccapurple"
    colora.style.backgroundColor = "rebeccapurple"
};

function pickdog(element){
    animalimg.src = "images/anne-s.jpg"
    element.style.backgroundColor = "goldenrod"
    btnerase1.style.backgroundColor = "white"
    // element.className = "btn"
    element.classList.add("btn")
    colora.style.backgroundColor = "pink"
    
    console.log(element.classList.add(".btn"));
};