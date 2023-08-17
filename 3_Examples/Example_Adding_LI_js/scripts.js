// window.onload=function myFunction() {
//     var  boton = document.getElementById('boton');
//     boton.addEventListener('click',
//     function(){
//         var name = document.getElementById("name").value;
//         document.getElementById("listado").innerHTML += "<li>" + name + "</li>";
//         alert("Nombre ingresado");
//     })
// }
function kev(){
    var name = document.getElementById("name").value;
    console.log(name);
    document.getElementById("listado").innerHTML += "<li>" + name + "</li>";
    alert("Nombre ingresado");
}