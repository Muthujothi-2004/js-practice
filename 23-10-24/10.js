// fizzBuzz

function fizzBuzz(a){
   for(i=1;i<=a;i++){
    let pat="";
    for(j=1;j<i;j++){
        if(j%3==0&&j%5===0){
            console.log("fizzbuzz")
        }

        else if(j%3===0){
            console.log("fizz")
        }

        else if (j%5===0){
            console.log("buzz")
        }

        else{
            pat=pat+j+" "
        }
            
        
    }
   }
}
fizzBuzz(5)