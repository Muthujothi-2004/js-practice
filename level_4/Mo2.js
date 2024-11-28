function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

    }
    return mid;

}
console.log(binarySearch([2, 4, 5, 6, 7, 8, 10], 2))

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1; // Adjusted to `length - 1` to ensure valid indexing.

    while (left <= right) {  // Correct termination condition
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Found the target
        } else if (arr[mid] < target) {
            left = mid + 1; // Move the left pointer to the right
        } else {
            right = mid - 1; // Move the right pointer to the left
        }
    }

    return -1; // Target not found
}

// Example usage
console.log(binarySearch([2, 4, 5, 6, 7, 8, 10], 2)); // Output: 0



function arra(ar, tar) {
    let left = 0;
    let right = ar.length - 1;

    for (i = right; i < left; i++) {
        let mid = Math.floor((left + right) / 2);
        if (left <= right) {
            if (ar[mid] === tar) {
                return mid;
            }
            else if (ar[mid] < tar) {
                left = mid + 1;
            }
            else {
                right = mid - 1
            }
        }
    }
  return -1;
}
arra([1, 4, 5, 6, 7, 8], 5)
