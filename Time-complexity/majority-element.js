function hasMajorityElement(arr) {
  let candidate = null;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (count === 0) {
      candidate = num;
    }
    if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num === candidate) {
      count++;
    }
  }
  return count > arr.length / 2;
}
const array1 = [3, 1, 3, 4, 4, 5, 3, 5, 3, 3, 3, 6, 3];
const array2 = [3, 1, 3, 4, 4];
console.log(hasMajorityElement(array1)," , array1 has majority element"); // Output: true , array1 has majority element
console.log(hasMajorityElement(array2), " , array2 do not has majority element"); // Output: false , array2 do not has majority element
