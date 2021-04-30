function evenOrOdd (num){
  if (!Number.isInteger(num)) {
    console.log('Error. Number is not an integer');
  } else if ((num % 2) === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(4);
evenOrOdd(57);
evenOrOdd(true);
evenOrOdd('Hello');