// Reverse the array without using built-in reverse().

function reverse(n){
    let rever=[];
      for(i=n.length-1;i>=0;i--){
        rever.push(n[i])
      }

      console.log(rever)
}

reverse([2,9,0,1])