function factorial(num) {
  let returnValue = 1;
  for (let count = num; count > 0; count -= 1){
    returnValue *= count;
  }
  return returnValue;
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));