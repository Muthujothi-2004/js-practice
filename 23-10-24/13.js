function fibonacci(n) {
    let a=0;
    let b=1;
    let c=0;
    for(i=1;i<=n-1;i++){
        c=a+b;
         a=b;
         b=c;
    }
     console.log(c)
     
 }
 fibonacci(2)