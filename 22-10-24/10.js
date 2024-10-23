// Calculate the factorial of 6 (i.e., 
// 6
// !
// 6!)

    function  fact(a){
          let fac=1;
          for(i=1;i<=a;i++){
            fac*=i
          }
          console.log(fac)
    }
    fact(6)