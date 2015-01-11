//An example of a simple calculator created with the arguments object
//Eloquent Javascript

function calcSum(){
  var total = 0;
  for(var i = 1;i <= arguments.length;i++){
    total+=arguments[i-1];
  }
  return total;
}

console.log(calcSum(10,20));
//Result --> 30
