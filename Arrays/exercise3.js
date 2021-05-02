function isEven (array) {
  
  array.forEach( function(index) {
    if (Array.isArray(index)){
      isEven(index);
    }else if(index % 2 === 0){
      console.log(index)
    }
  });

}

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

isEven(myArray);