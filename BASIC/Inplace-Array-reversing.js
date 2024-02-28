function InPlace_Array_reverse(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let rev = arr[start];
    arr[start] = arr[end];
    arr[end] = rev;
    start++;
    end--;
  }
}
const Arraynumbers = [1, 2, 3, 4, 5];
InPlace_Array_reverse(Arraynumbers);
console.log(Arraynumbers); // Output: [5, 4, 3, 2, 1]
