//Prime numbers is number that is greater than 1 that cannot be exactly divided by any whole number other than itself and 1 (e.g. 2, 3, 5, 7, 11).

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

function prime_numbers(oldarray) {
  const newarray = [];
  for (let num of oldarray) {
    if (Prime(num)) {
      newarray.push(num);
    }
  }
  return newarray;
}

const oldarray = [1, 2, 83, 3, 4, 80, 5, 6, 7, 8, 17, 10, 11, 12, 13, 14];
const allprime = prime_numbers(oldarray);
console.log(allprime.join(", ")); // Output: 2, 83, 3, 5, 7, 17, 11, 13
