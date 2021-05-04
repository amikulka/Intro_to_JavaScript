function largestNumber(numArray) {
  let max = numArray.reduce(function (a, b) {
    return Math.max(a, b);
  });
  console.log(max);
}

arr1 = [1, 6, 3, 2];
arr2 = [-1, -6, -3, -2];
arr3 = [2, 2];

largestNumber(arr1);
largestNumber(arr2);
largestNumber(arr3);
