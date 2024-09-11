// let count = 1;
// while (count <= 100) {
//  console.log("Counting down: " + count);
//  count = count + 1;
// }
//mistake: >0 , correction: <=100

// let temperature = 30;
// if (temperature <= 20) {
//  console.log("It's cold outside.");
// } else {
//  console.log("It's warm outside.");
// }
// mistake:=, correction:<

// checkNumber(-5);
// checkNumber(0);
// checkNumber(10, 20);
// function checkNumber(num) {
//     if (num > 0){
//     console.log("Negative");}
//     else if(num < 0) 
//     {
//         console.log("Positive");
//     }
//     else {
//         console.log("Zero");
//     }
// }

// mistake:function formate ,  correction: correct the formate


calculateArea();
greetUser();
function calculateArea() {
 const radius = 5;
//  let area;
 var area = Math.PI * radius * radius;
 console.log(area);
}
function greetUser() {
 var userName = "John";
 console.log(userName);
}

// mistake: console.log formation is worng , correction: correct the formation