// function fact(a){
//  let fac=1;
//  for(i=1;i<=a;i++){
//     fac*=i
//  }
//  console.log(fac)
// }
// fact(5)


function fact(a,b){
    fac1=1;
    fac2=1;
    sum=0;
    for(i=1;i<=a;i++){
        fac1*=i;
        // sum=sum+fac1;
    }
    for(i=1;i<=b;i++){
        fac2*=i;
        // sum=sum+fac2;

    }
    sum=fac1+fac2;
    console.log(sum);
}
fact(6,10)