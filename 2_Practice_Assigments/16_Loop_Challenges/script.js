
/*Counter Odd numbers to 20 */ 

for (var i=1 ; i<=20; i+=2){
  console.log(i)
}


/*Counter from 100 to 0 with divisible numbers in 3  */ 

for (var i=100 ; i>=0; i--){
  
  var dvi2 = i % 3 == 0;
  if (dvi2){
console.log(i)
  }
}


/*Counter from 4 to -3.5  */ 
for (var i=4 ; i>-4; i-=1.5){
  console.log(i)
}


/*Sum of counter from 1 to 100*/ 
var i2 = 0;

for (var i=1 ; i<=100; i++){
  i2 += i;
  console.log(i2)
 
}
console.log(i2)


/*Factorial */ 
var i2 = 1;
var text2 = "";
for (var i=1 ; i<=12; i++){
  i2 = i * i2;
  text2 += i + "*"
 
}
console.log(text2+"="+i2)