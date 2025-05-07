// Even-Odd Checker

let arr=[10,2,4,3,5,7,9,21];
let odd="";
let even="";
let isodd=false;
// let iseven=false;
for(i=0;i<arr.length;i++){
    if(arr[i]%2===0){
       console.log("its even"+arr[i])
    }
    else{
        console.log("its is odd" + arr[i])
    }
}