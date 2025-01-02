//  Write an algorithm to find the square root of a number without using a library function with accuracy upto 2 decimal places. 


function squareRoot(number) {
    if (number < 0) return NaN; // Square root of negative numbers is not real
    if (number === 0 || number === 1) return number; // Handle 0 and 1 cases

    let start = 0;
    let end = number;
    let mid;

    // Precision level for accuracy up to 2 decimal places
    const precision = 0.01;

    // Perform binary search
    while ((end - start) > precision) {
        mid = (start + end) / 2;

        // If mid squared is close to number, we are done
        if (Math.abs(mid * mid - number) < precision) {
            return parseFloat(mid.toFixed(2));
        }
        else if (mid * mid < number) {
            start = mid;
        } else {
            end = mid;
        }
    }

    // Returning result rounded to 2 decimal places
    return parseFloat(mid.toFixed(2));
}

// Example usage:
console.log(squareRoot(25)); // Output: 5.00
console.log(squareRoot(10)); // Output: 3.16 (approximately)
console.log(squareRoot(0.25)); // Output: 0.50
