// Write code to implement the fibonacci sequence.

function febbo(n){
let a= 0;
let b=1;
console.log(a)
console.log(b)
let c=0;
for(i=1;i<=n;i++){
    c=a+b
    a=b
    b=c
   console.log(c)
}

}
febbo(10);