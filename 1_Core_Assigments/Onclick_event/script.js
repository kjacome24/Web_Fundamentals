var num2=0;
var num=0;

function adddefinitionbtn(element) {
  element.remove();

}

function ninjalike() {
  alert("Ninja was liked");
  num +=1;
  console.log(num);
  if(num == 1)
  var message=" Like";
else
  var message=" Likes";

  document.getElementById("btn3").innerHTML = num + message;
}

function ninjalike2() {
  alert("Ninja was liked");
  num2 +=1;
  // podemos incluir más código aquí si queremos
  console.log(num2);
  if(num2 == 1)
  var messages=" Like";
else
  var messages=" Likes";

  document.getElementById("btn4").innerHTML = num2 + messages;
}

function loginbtn(element) {
element.innerText = "Logout";
}
