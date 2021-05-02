function sumOfSquares(myArray) {
 return myArray.reduce((accumulator, currentValue) => {
    return (accumulator + (currentValue * currentValue))
  }, 0 );
}

let array = [3, 5, 7];
console.log(sumOfSquares(array));