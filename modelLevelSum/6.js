// Given a array of integers, count of number of occurrences of the maximum element in the array 
// Sample Input: 3 2 1 3
// Sample Output: 2
function countMaxOccurrences(arr) {
    let max = Math.max(...arr); // Find the maximum element
    let count = 0;             // Initialize the count

    for (let i = 0; i < arr.length; i++) { // Iterate through the array
        if (arr[i] === max) {  // If the current element equals the maximum element
            count++;           // Increment the count
        }
    }
 
    return count;  // Return the count
}

// Sample Input
let input = [3, 2, 1, 3];

// Call the function and display the result
console.log(countMaxOccurrences(input));  // Output: 2


