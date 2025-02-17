// Given an array of strings, find the string which comes first alphabetically without using any library functions

function str(n){
    b=n[0];
    for(i=0;i<n.length;i++){
        if(n[i]<b){
            b=n[i]
        }
    }
    console.log(b)
}
str(["banan","apple","cat"])