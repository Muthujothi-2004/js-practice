function febbo (a){
 let A=0; 
 let b=1;
 let c=0;
  for(i=3;i<a;i++){
    console.log(a)
    c=a+b;
    a=b;
    b=c
  }
  
} febbo(10)