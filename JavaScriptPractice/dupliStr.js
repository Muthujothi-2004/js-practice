

// let arr=[1,3,2,6,8,9,1,1,1];
// let ar=[]
// for(i=0;i<arr.length;i++){
//     if(!ar.includes(arr[i])){
//         ar.push(arr[i])
//     }
// }
// console.log(ar)


// let b=arr.sort((a,b)=>a-b)
// console.log(b)

// for(i=0;i<arr.length;i++){
//    for(j=i+1;j<arr.length;j++){
//     if(arr[i]>arr[j]){
//         [arr[i],arr[j]]=[arr[j],arr[i]]
//     }
//    }
// }
// console.log(arr)


// let a=[2,0,1,3,9,5]

// for(i=0;i<a.length;i++){
//     min=i;
// for(j=i+1;j<a.length;j++){
//     if(a[min]>a[j]){
//         min=j
//     }
// }
// [a[min],a[i]]=[a[i],a[min]]
// }
// console.log(a)

// const a = [
//     { name: "Arun", age: 24 },
//     { name: "Priya", age: 30 },
//     { name: "Kumar", age: 22 },
//     { name: "Sneha", age: 27 },
//     { name: "Raj", age: 25 },
//     { name: "Anjali", age: 28 },
//     { name: "Vikram", age: 24 },
//     { name: "Neha", age: 22 },
//     { name: "Ravi", age: 29 },
//     { name: "Pooja", age: 25 },
//     { name: "Arun", age: 24 },
//     { name: "Vikram", age: 24 },
//     { name: "Raj", age: 25 },
//     { name: "Sneha", age: 27 },
//     { name: "Kumar", age: 22 },
//     { name: "Maya", age: 26 },
//     { name: "Sanjay", age: 30 },
//     { name: "Maya", age: 26 },
//     { name: "Arun", age: 24 },
//     { name: "Ravi", age: 29 }
// ];

// let arr=[];
// for(i=0;i<a.length;i++){
//     isDub=true;

//     for(j=0;j<arr.length;j++){
//         if(a[i].age===arr[j].age){
//             isDub=false
//         }
//     }
//     if(isDub){
//         arr.push(a[i])
//     }
// }
// console.log(arr)




arr=[1,0,20,null,20,null,30]

let a=[];
let b=[];
let isnull=false;
for( let i=0;i<arr.length;i++){
    if(arr[i]===null){
        isnull=true
    }   
}

if(isnull){
    a.push(arr[i])
    }
    else{
        b.push(arr[i])
    }



 console.log(result= [a,b])


