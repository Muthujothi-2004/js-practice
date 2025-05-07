var mul=1;

function multiply (n,a){

    if(a===n){
        return  mul
    }
  mul=mul*(n-a);

   multiply(n , a+1)

}
 multiply(5,0);
 console.log(mul)
