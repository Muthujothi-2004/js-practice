let n = [1, 2, 3, 4, 6];
let b = []; //123456
for(i=0;i<n.length;i++){
    b.push(i+1)
}

for(let j=0;j<b.length;j++){
    if(!n.includes(b[j])){
        ans=b[j]
    }
}

console.log(ans)



