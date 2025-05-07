// Find the sum of all elements in an array

function Arr(n){
    let sum=0;
       for(i=0;i<n.length;i++){
        sum=sum+n[i]
       }

       console.log(sum)
}

Arr([1,10,20,90,2])