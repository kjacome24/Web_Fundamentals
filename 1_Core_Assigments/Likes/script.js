var Counterlikes1 = document.querySelector("#Counterlikes1");
var Counterlikes2 = document.querySelector("#Counterlikes2");
var Counterlikes3 = document.querySelector("#Counterlikes3");

var num3=0;
var num2=0;
var num=0;



function ninjalike() {
  num +=1;
  if(num == 1)
  var message=" Like";
else
  var message=" Likes";
  Counterlikes1.innerText = num + message;
}

function ninjalike2() {
  num2 +=1;
  if(num2 == 1)
  var message=" Like";
else
  var message=" Likes";
  Counterlikes2.innerText = num2 + message;
}

function ninjalike3() {
  num3 +=1;
  if(num == 1)
  var message=" Like";
else
  var message=" Likes";
  Counterlikes3.innerText = num3 + message;
}

// function ninjalike() {
//   num++;
//   document.querySelector("#Counterlikes1").innerHTML = "Hello World!";
// }


