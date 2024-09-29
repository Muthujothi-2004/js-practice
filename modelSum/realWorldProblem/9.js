// Create an array of 10 objects with keys principal, rateOfInterest and noOfYears. 
// Find the simple interest for each array object and store it in a new array.
//  Print this array
let newArray=[];
let array=[
{ principal : 10000, rateOfInterest : 5, noOfYears: 4},

{ principal : 13000, rateOfInterest : 6, noOfYears: 5},

{principal : 16000, rateOfInterest : 6, noOfYears: 8},

{principal : 19000, rateOfInterest : 6, noOfYears: 3},

{ principal : 30000, rateOfInterest : 6, noOfYears: 4},

{principal : 70000, rateOfInterest : 7, noOfYears: 5},

{principal : 80000, rateOfInterest : 9, noOfYears: 5},

{principal : 50000, rateOfInterest : 1, noOfYears: 5},

{principal : 90000, rateOfInterest : 7, noOfYears: 3},

{ principal : 18000, rateOfInterest : 9, noOfYears: 3}

]
for(i=0;i<array.length;i++){
let a=array[i].principal*array[i].rateOfInterest*array[i].noOfYears;
let div=a/100;
newArray.push(div);
}
console.log(newArray);













