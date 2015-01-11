//sum in range

function range(start,end,step){
  if(step == null){
    step = 1;
  }
 var nr = [];
  if(step > 0){
    for(var i = start;i <= end;i+=step){
     nr.push(i); 
    }
  }
  else{
    for(var i = start;i >= end;i+=step){
     nr.push(i); 
    }
  }
  
  return nr;
}

function sum(list){
 var sum = 0;
  for(var i = 0;i < list.length;i++){
    sum+=list[i]; 
  }
  return sum;
}

console.log(sum(range(5,2,-2)));
//Result <-- 8

//Reversing an Array

function reverseArray(initArray){
  var reversedArray = [];
  for(var i = initArray.length -1;i>=0;i--){
   reversedArray.push(initArray[i]);
  }
  return reversedArray;
}

console.log(reverseArray([23,32,13]));
//Result <-- [13,32,23]

function reverseArrayInPlace(arrayValue){
  var reversedArray = [];
  for(var i = arrayValue.length -1;i>=0;i--){
   reversedArray.push(arrayValue[i]);
  }
  arrayValue = reversedArray;
  return arrayValue;
}

console.log(reverseArrayInPlace([20,30,40]));
//Result <-- [40,30,20]


