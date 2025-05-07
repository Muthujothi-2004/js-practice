// let a=[1,1,2,2,3,4,5,3,2,2,1,8];

// let ob={};
// let max_count=0;
// for( i of a){
   
//     if(ob[i]){
//        ob[i]= ob[i]+1
//     }
//     else{
//         ob[i]=1
//     }

//     if(ob[i]>max_count){
//         max_count=ob[i];
//     }

//     console.log(max_count)
//     console.log(a[i])
// }
// console.log(ob)


let a=[1,3,2,4,6,1,2,34,1,2,3];
let ob={};

for(i of a){
    if(ob[i]){
        ob[i]=ob[i]+1
    }

    else{
        ob[i]=1
    }
}
console.log(ob)
