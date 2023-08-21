function editprofile(){
var newname = document.querySelector("#newname")  
var stringt = '<input type="text" id="inputname" name="name" placeholder="Ingrese nombre de persona"></input>'
var stringt2 = '<button id="botoninputname" onclick='
var stringt3 =  "'kev()'>Agregar Nombre</button>"
var stringt2 = stringt2 + stringt3
console.log(stringt)
console.log(stringt2)
newname.innerHTML += stringt
newname.innerHTML += stringt2
}

function kev(){
var newname0 = document.querySelector("#botoninputname")
var newname1 = document.querySelector("#inputname")    
var newname2 = newname1.value
var newnamejane = document.querySelector("#namejane")
newnamejane.innerHTML = newname2;
alert("Name was updated");
newname0.remove();
newname1.remove();
}

var counterx= 2;

function deleterequest(element){
var titleconect1 = document.querySelector(".TitleContainerConnetionRequests")
var counterconnectionrequest = document.querySelector("#btncount")
counterx = counterx - 1;
element.innerHTML = "<div></div>";
titleconect1.style.height = "100px"
counterconnectionrequest.innerText = counterx
}

var countery= 418;
function addyourconnectioncount(){
var counterconnectionrequest = document.querySelector("#btnfriends")
countery = countery + 1;
counterconnectionrequest.innerText = countery
}



