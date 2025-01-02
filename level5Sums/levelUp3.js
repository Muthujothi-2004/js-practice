// 3.Given two string compare if one is a permutation of another
// example str1 = man str2 = nam

// output: true
// example str1=pear str2=reap output true
// example str1=fall str2=faal output false


function twoString(n,m){
   if ( n.length!=m.length){
    return false
   }
   let str1=n.split("").sort().join(' ')
   let srt2=m.split("").sort().join(' ')

   return str1===srt2

}
console.log(twoString("nam","man"))

// function twoString(n, m) {
//     // If the lengths of the two strings are not equal, they can't be permutations
//     if (n.length !== m.length) {
//         return false;
//     }

//     // Split, sort, and join both strings
//     let str1 = n.split("").sort().join('');
//     let str2 = m.split("").sort().join('');

//     // Compare the sorted strings
//     return str1 === str2;
// }

// // Test cases
// console.log(twoString("fall", "faal"));  // Output: false
// console.log(twoString("man", "nam"));    // Output: true
// console.log(twoString("pear", "reap"));  // Output: true
