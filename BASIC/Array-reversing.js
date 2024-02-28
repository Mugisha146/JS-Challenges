function Array_reversing(arr) {
  const reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}
const Arraynumbers = [1, 2, 3, 4, 5];
console.log(Array_reversing(Arraynumbers)); // Output: [5, 4, 3, 2, 1]
