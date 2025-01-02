// You are tasked with arranging a list of employees based on their ages, from youngest to oldest. 
// How would you use Selection Sort to sort the list of employee ages?

function employee(n){
  for(i=0;i<n.length;i++){
    let min = i;
    for(j=i+1;j<n.length;j++){
        if(n[min].age>n[j].age){
            min=j;
        }
    }
    [n[i],n[min]]=[n[min],n[i]]
  }
  console.log(n)
}
employee(([
    { name: "John", age: 28 },
    { name: "Alice", age: 24 },
    { name: "Bob", age: 35 },
    { name: "David", age: 22 },
    { name: "Eve", age: 30 }
]))