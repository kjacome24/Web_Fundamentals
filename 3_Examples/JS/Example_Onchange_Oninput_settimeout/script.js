// function codeToRunLater() {
// for(var i=0; i<1111; i++) {
//     console.log("Running:" + i)
// }}

// setTimeout(codeToRunLater,5000);

// console.log("End")


var named = document.querySelector("#name");
var foodselected = "Pizza";
function setname(element) {
    console.log(element.value)
    named.innerText = element.value
}

function pickfood(element){
    console.log(element.value)
    foodselected = element.value;
}

function Ordering(){
    alert("You ordered" + foodselected)
}