function febo(n){
     let a=0;
     let b=1;
     console.log(a)
     for(i=1;i<n;i++){
       let c=a+b
       console.log(c)
       a=b;
       b=c
     }
}
febo(10)