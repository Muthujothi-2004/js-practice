let window = [1, 2, 3, 5, 6, 10, 20, 35, 60];
let k = 3;

let maxVal = -Infinity;
let maxSubArray = [];

for (let i = 0; i <= window.length - k; i++) {
    let subArray = window.slice(i, i + k);
    let currentMax = Math.max(...subArray);

    if (currentMax > maxVal) {
        maxVal = currentMax;
        maxSubArray = subArray;
    }
}

console.log( maxSubArray);
