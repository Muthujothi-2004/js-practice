// Calculate the factorial of 5 (i.e., 
// 5
// !
// 5!).

function fact(a){
let fac=1;
for(i=1;i<=a;i++){
    fac*=i;
}
console.log(fac)

}fact(5)