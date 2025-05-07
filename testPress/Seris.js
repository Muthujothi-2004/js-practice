let n=[2,3,5,7,9];
let sum=[];

for(let i=0;i<n.length;i++){
    if(i===0){
        sum.push(n[i])
    }

    else{
        sum.push(n[i]+n[i-1])
    }

}
console.log(sum)

