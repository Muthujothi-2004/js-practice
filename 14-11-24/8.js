// Given an array find all the values less than 15 in a new array if not print No Element less than 15.
//   Example if arr = [4, 15, 8, 25, 30] output is 4, 8. if ar = [19, 89, 90, 18] output No element less than 15

function element(a){
    let empty=[];
    for(i=0;i<a.length;i++){
      if(a[i]<15){
            empty.push(a[i])
      
      }
     
    }
    if(empty.length>0){
        console.log(empty)
    }
    else{
        console.log("No element less than 15")
    }
  }
  element([1,5,6,7,15,21.16,17])