// sum of all natural number 1 to n

function sumOfNaturalNumber(num) {
  if (num < 1) {
    return 0;
  }

  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumOfNaturalNumber(8));
