let obj = {
  b: 2,
  a: 1,
  c: 3,
}

let newArray = Object.keys(obj);
let newArrayUpper = newArray.map(value => value.toUpperCase());

console.log(newArrayUpper);
console.log(obj);