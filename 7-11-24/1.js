// arr = [1, 2, 3, 4, 5] and target = 5,

function arr(a){
   let tar=5;

   for(i=0;i<a.length;i++){
    for(j=1;j<a.length;j++){
        if(i[i]+j[i]===tar){
            console.log("yes")
        }
    }
   }
}
arr([1,2,3,4,5])