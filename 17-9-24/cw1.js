// // sum 1
// function sumNumbers(n) {
//     let sum = 0;
//     let i = 1;
//     while (i <= n) {
//       sum += i;
//       i++;
//     }
//     return sum;
//   }
//   console.log(sumNumbers(10));

//   correction : i<=n and function call ;

// sum 2

// function calculateGrade(score) {
//     if (score >= 90) {
//         console.log("Grade: A");
//     } else if (score <= 80) {
//         console.log("Grade: B");
//     } else if (score <= 70) {
//         console.log("Grade: C");
//     } else if (score >= 60) {
//         console.log("Grade: D");
//     } else {
//         console.log("Grade: F");
//     }
// }
// calculateGrade(80);


let a = 5;
let b = 10;
let c = 3;

if( a < b || a < c) {
    console.log(a);
}

else if (b > a && b < c) {
    console.log(b);
}
else {
    console.log(c);
}