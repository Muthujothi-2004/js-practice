function same(a){
   let b=2;
   let c=a.filter(x=>x!==b);
   console.log(c)
   } 

same(a=[1,2,2,3,4,5,6,6])