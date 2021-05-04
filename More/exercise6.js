function allMatches(arrWords, regex) {
  let newArray = [];
  newArray = arrWords.reduce(function(accum, currentValue){
    if (regex.test(currentValue)) {
      accum.push(currentValue);
    }
    return accum;
  }, [] );
console.log(newArray)
}


let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']