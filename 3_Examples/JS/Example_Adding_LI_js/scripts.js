/*Option with query selector*/

function kev(){
    var name = document.querySelector("#name").value;
    var listado = document.querySelector("#listado");
    console.log(name);
    listado.innerHTML += "<li>" + name + "</li>";
    alert("Nombre ingresado");
}
/*Option with get element ID*/


//     function kev(){
//     var name = document.getElementById("name").value;
//     console.log(name);
//     document.getElementById("listado").innerHTML += "<li>" + name + "</li>";
//     alert("Nombre ingresado");
// }