// function codeToRunLater() {
// for(var i=0; i<1111; i++) {
//     console.log("Running:" + i)
// }}

// setTimeout(codeToRunLater,5000);

// console.log("End")


// var named = document.querySelector("#name");
// var foodselected = "Pizza";
// function setname(element) {
//     console.log(element.value)
//     named.innerText = element.value
// }

// function pickfood(element){
//     console.log(element.value)
//     foodselected = element.value;
// }

// function Ordering(){
//     alert("You ordered" + foodselected)
// }


function Loadingw() {
    alert("Loading weather report...");
}


function dismiscookie(element) {
    var maindivfooter = document.querySelector("#footer0")
    maindivfooter.remove();
}



function temperaturepick(element) {
var redtoday = document.querySelector("#redtoday")
var bluetoday = document.querySelector("#bluetoday")

var redtomorrow = document.querySelector("#redtomorrow")
var bluetomorrow = document.querySelector("#bluetomorrow")

var redfriday = document.querySelector("#redfriday")
var bluefriday = document.querySelector("#bluefriday")

var redsaturday = document.querySelector("#redsaturday")
var bluesaturday = document.querySelector("#bluesaturday")

    if(element.value == "°C" ) {
        redtoday.innerText = "24°";
        bluetoday.innerText = "18°";
        redtomorrow.innerText = "27°";
        bluetomorrow.innerText = "19°";
        redfriday.innerText = "21°";
        bluefriday.innerText = "16°";
        redsaturday.innerText = "26°";
        bluesaturday.innerText = "21°";
    }  else {
        redtoday.innerText = "75°";
        bluetoday.innerText = "65°";
        redtomorrow.innerText = "80°";
        bluetomorrow.innerText = "66°";
        redfriday.innerText = "69°";
        bluefriday.innerText = "61°";
        redsaturday.innerText = "78°";
        bluesaturday.innerText = "70°";
    }
}




