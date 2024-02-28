function Prime(num) {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  const square_root = num ** 0.5;
  for (let i = 2; i <= square_root; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function customSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  let index = 0;
  while (index < arr.length) {
    if (Prime(arr[index])) {
      arr.splice(index, 1);
    } else {
      index++;
    }
  }

  return arr;
}

const array = [10, 7, 15, 3, 22, 5, 8, 17];
console.log("Original array:", array);
console.log("Sorted array with primes removed:", customSort(array.slice()));

//output:Original array: [10, 7, 15,  3,22, 5,  8, 17] 
       //Sorted array with primes removed: [22, 15, 10, 8]