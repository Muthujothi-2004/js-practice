let str="I like that dress";
let count=0;
let sp=str.toLowerCase().split("");
let vowel= ["a", "e", "i", "o", "u"];
for(i=0;i<sp.length;i++){
    if(vowel.includes(sp[i])){
        
    count++

    }
}
console.log(count)



