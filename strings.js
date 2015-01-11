//String examples I learnt in this chapter
//Eloquent JS

var name = "Stochita Radu Ioan"; //the variable I am going to use

//The slice method
console.log(name.slice(0,8));
//Result --> Stochita
  /* the slice method returns the characters as a new string from 0 to 8(without the 8th character) - in this example */
  
  
//The indexOf & lastIndexOf methods
console.log(name.indexOf("a"));
//Result --> 7
console.log(name.lastIndexOf("a"));
//Result --> 16
  /* the indexOf method returns the first position where that char appears and the lastIndexOf returns the last position where the char appears */
  
//The trim method
name = "   Stochita Radu Ioan  "; // as you can see I have some whitespace at the beggining and at the end of the var
console.log(name.trim());
//Result --> "Stochita Radu Ioan"
  /* it returns the string without whitespace at the end or at the beggining */
