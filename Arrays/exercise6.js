function oddLengths(myArray) {
  let newArray = myArray.map(element => element.length);
  return newArray.filter(element => element % 2 === 1);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));