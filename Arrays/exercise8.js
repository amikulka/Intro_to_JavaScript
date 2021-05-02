function oddLengths (myArray) {
  return myArray.reduce((accumulator, value) => {
    if (value.length % 2 === 1) { 
      accumulator.push(value.length);
    }
    return accumulator;
  }, []);
}


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));