
function factorial(numb){
  
  
  
  if(numb < 0) {
    return “enter a higher number“;
  }
  if(numb === 0) {
    return 1;
  }
  
  return numb * factorial(numb -1);
}




factorial(prompt(“Please enter a number and i will return the factorials“));
