// var count = 5;
// count -= 5;
// var message = "Hola mundo";
// var likeJS = true;
// console.log(count + message + likeJS);

// function contador(startNum) {    
//     for (var num = startNum ; num >= 0 ; num--) {        
//         console.log(num);    
//     }
// }
// contador(6);   
// contador(3); 


// function counter(startNum2) {    
//     for(var num = startNum2; num <= 5; num++){
//         console.log(num);
//     }
// }

// counter(4); 


// function crearArreglo(num) {        
//     var nuevoArreglo = [];       
//     for (var i = 0; i <= num; i++) {                
//         nuevoArreglo.push(i);    
//         console.log(nuevoArreglo);    
//     }
//     return nuevoArreglo; 
// }
// var y = crearArreglo(5);
// console.log("Este es el arregle:" + y);  

var num=0;
function custom() {

    num +=1;
    // podemos incluir más código aquí si queremos
    console.log(num);
    alert(num);
    document.getElementById("listado").innerHTML = num;
}
