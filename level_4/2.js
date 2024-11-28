// Given an array of strings arr and another string s, check if s in present in arr

function arr(n){
    let str="s"
    for(i=0;i<n.length;i++){
       
         if(n[i]===str){
     console.log("yes")
        }  

        else{
            console.log("no")
        }
    }
}
arr(["a","b","c","j","r"])