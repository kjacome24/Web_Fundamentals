
for (var i=1 ; i<=100; i++){



  var dvi = i % 3 == 0;
  var dvi2 = i % 5 == 0;
  
  if (dvi2  && dvi){
    console.log("FizzBuzz")
  } else {
    if (dvi){
      console.log("Fizz")
    } else {
      if (dvi2){
        console.log("Buzz")
      } else {
        console.log(i);
    }
    
  }
}


}
