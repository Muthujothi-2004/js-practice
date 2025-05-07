let str="I like apple and orange";

let sp=str.toLowerCase().split("");
let vowels=["a","e","i","o","u"];
let vowelCount={};

for(let i=0;i<sp.length;i++){
    if(vowels.includes(sp[i])){
        vowelCount[sp[i]]=(vowelCount[sp[i]]|| 0 )+1;
    }
}

for(let i in vowelCount){
       console.log( i +" "+ vowelCount[i])
}