let n = [1, [2, 3], "A", 4, "B"];
let letter = [];
let number = [];
for (i = 0; i < n.length; i++) {
  if (Array.isArray(n[i])) {
    number.push(...n[i]);
  } 
  else {
    if (typeof n[i] === "string") {
      letter.push(n[i]);
    } else {
      number.push(n[i]);
    }
  }
}

let correct=[...letter,...number]
console.log(correct)
