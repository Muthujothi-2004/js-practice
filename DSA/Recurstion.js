var sum=0;

function recur(n,a){
     //step1 n=5 a=0;
     //step2 n=5 a=1;
     //step3 n=5 a=2;
     //step4 n=5 ,a =3;
       //step3 n=5 ,a =4
         //step3 n=5 ,a =5

         if(a===n){
            return sum;
         }
    sum=sum+n-a; 
   // step1 sum=5;
   //step2 sum=9;
   //step2 sum= 12;
   //step1 sum = 14;
     //step3 sum=15

     recur(n,a+1 )
     //step1 n=5 ,a =1
      //step2 n=5 ,a =2
      //step3 n=5 ,a =3
       //step3 n=5 ,a =4
         //step3 n=5 ,a =5
}
let ans = recur(5 , 0)
console.log(sum)