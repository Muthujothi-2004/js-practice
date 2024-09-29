// Calculating Total Monthly Expenses
// You have an array of 10 objects, each representing monthly expenses with keys rent, groceries,
//  and utilities. Write a program to calculate the total monthly expense for each object and store it in a new array. Print the new array.
let newArray=[]
expenses = [
    { rent: 1000, groceries: 500, utilities: 200 },

    { rent: 800, groceries: 400, utilities: 150 },

    { rent: 700, groceries: 500, utilities: 200 },

    { rent: 800, groceries: 400, utilities: 350 },

    { rent: 1000, groceries: 700, utilities: 200 },

    { rent: 900, groceries: 400, utilities: 150 },

    { rent: 1100, groceries: 500, utilities: 290 },

    { rent: 800, groceries: 400, utilities: 170 },

    { rent: 1000, groceries: 600, utilities: 200 },

    { rent: 870, groceries: 400, utilities: 150 },
    ]
    for(i=0;i<expenses.length;i++){
   total=expenses[i].rent+expenses[i].groceries+expenses[i].utilities;
   newArray.push(total);
    }
    console.log(newArray);
    


