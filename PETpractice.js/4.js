// Given an array of strings arr and another string s, check if s in present in arr

function arr(n){
    target="s";
    istarget=false
    for(i=0;i<n.length;i++){
        if(n[i]===target){
        istarget=true;
        }
    }
    if(istarget){
        console.log("yes")
    }
    else{
        console.log("no")
    }
}
arr(["a","s","n"])