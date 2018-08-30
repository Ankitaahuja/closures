function makeLoadedDie() {
    var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
    var i = 0;
  
    return function() {
  if (i >= list.length){
     i = 0;
  }
     return list[i++];
      /* your code here */
    }
  };
  
  var rollLoadedDie = makeLoadedDie();
  
  console.log(rollLoadedDie());  // 5
  console.log(rollLoadedDie());  // 4
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 
  console.log(rollLoadedDie());  // 4
  console.log(rollLoadedDie());  // 
 

  var countdownGenerator = function (x) {
  

    var num = x;
     return function() {
       // num--
     if (num > 0){
        console.log("T-minus", num)
     }
     if (num === 0){
        console.log("blast Off")
     }
     if (num < 0){
        console.log("Rockets already gone, bub!")
     }
       num--
     }
   };
   
   var countdown = countdownGenerator(3);
   countdown(); // T-minus 3...
   countdown(); // T-minus 2...
   countdown(); // T-minus 1...
   countdown(); // Blast Off!
   countdown(); // Rockets already gone, bub!
   countdown(); // Rockets already gone, bub!