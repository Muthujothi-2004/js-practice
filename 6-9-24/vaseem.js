function str(a) {
    let  evenStr = [];
    let oddStr = [];
    let evenSum = 0;
    let oddSum = 0;
    for (i = 0; i < a.length; i++) {
        if (a[i] % 2 == 0) {
            evenStr.push(a[i]);
            evenSum = evenSum + a[i];
        }

        else if (a[i] % 2 == 1) {
            oddStr.push(a[i]);
            oddSum = oddSum + a[i];
        }
    }
    console.log("even numbers is:" + [evenStr]);
    console.log("odd numbers is:" + oddStr);
    console.log("even numbers sum is:" + evenSum);
    console.log("odd numbers sum is:" + oddSum);

}
str(a = [1, 2, 3, 4, 5, 6, 7, 8])

// function sumOddEven(numbers) {
//     const oddNumbers = [];
//     const evenNumbers = [];
//     let oddSum = 0;
//     let evenSum = 0;

//     for (const num of numbers) {
//         if (num % 2 === 0) {
//             evenNumbers.push(num);
//             evenSum += num;
//         } else {
//             oddNumbers.push(num);
//             oddSum += num;
//         }
//     }

//     console.log('Odd Numbers:', oddNumbers);
//     console.log('Even Numbers:', evenNumbers);
//     console.log('Sum of Odd Numbers:', oddSum);
//     console.log('Sum of Even Numbers:', evenSum);
// }

// // Example usage:
// const bothNum = [1, 2, 3, 4, 5, 6, 7, 8];
// sumOddEven(bothNum);
