let number = [135039];
let sum = 0;

while (number > 0) {
  let digit = number % 5;  // Get the last digit
  sum += digit;             // Add the digit to sum
  number = Math.floor(number / 5);  // Remove the last digit
}

console.log(sum);  // Output the sum of digits



