//Q1. sum of all natural number 1 to n

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

//Q2. sum of digits of a number

function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(sumOfDigits(18));

//Q3. count the number of digits of a number

function countDigits(num) {
  num = Math.abs(num);
  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
}

console.log(countDigits(1213));

//Q4. check if a number is palindrome

let isPalindrome = function (num) {
  if (num < 1) {
    return false;
  }
  let copyNum = num;
  let reverseNum = 0;

  while (copyNum > 0) {
    const lastDigit = copyNum % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    copyNum = Math.floor(copyNum / 10);
  }

  return num === reverseNum;
};

console.log(isPalindrome(12321));

//Q5. Find nth Fibonacci number

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.

let fibo = function(num) {
    
}
