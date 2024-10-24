function mainFunction(a){
 for(i=1;i<=a;i++){
    m = fact(i);
     console.log(m)
 }

}

function fact(b){
let fac=1;
for(j=1;j<=b;j++){
    fac*=j;
}
return fac
}

mainFunction(2);
