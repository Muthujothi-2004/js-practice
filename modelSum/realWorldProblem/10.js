// Calculating Total Marks of Students 
// You have an array of 10 objects, each representing a student with keys subject1Marks,
//  subject2Marks, and subject3Marks. Write a program to calculate the total marks
//  for each student and store them in a new array. Print the new array
let newArray=[];
let add=0;
students = [
    { subject1Marks: 80, subject2Marks: 90, subject3Marks: 70 },

    { subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 },

    { subject1Marks: 70, subject2Marks: 90, subject3Marks: 70 },

    { subject1Marks: 60, subject2Marks: 80, subject3Marks: 75 },

    { subject1Marks: 90, subject2Marks: 90, subject3Marks: 80 },

    { subject1Marks: 70, subject2Marks: 70, subject3Marks: 65 },

    { subject1Marks: 70, subject2Marks: 70, subject3Marks: 70 },

    { subject1Marks: 60, subject2Marks: 60, subject3Marks: 65 },

    { subject1Marks: 80, subject2Marks: 70, subject3Marks: 90 },

    { subject1Marks: 60, subject2Marks: 60, subject3Marks: 65 },
        
    ]
for(i=0;i<students.length;i++){
    add=students[i].subject1Marks+students[i].subject2Marks+students[i].subject3Marks;
    newArray.push(add);
  
}
console.log(newArray);

















