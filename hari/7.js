
let n=5;
for(i=1;i<=n;i++){
    let str="";
    for(s=1;s<=n-i;s++){
        str=str+" "
    }
    for(j=1;j<=i;j++){
        if(j==1||j==i||i==n){
            str=str+"* "
        }
        else{
            str=str+"  "
        }
    }
    console.log(str)
    }

// l


// let a=5;
// for(let i=1;i<=a;i++){
//     console.log(' '.repeat(a-i)+' *'.repeat(a));
// }