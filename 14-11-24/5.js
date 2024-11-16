//
// 3. Given a string, the task is to reverse the order of the words in the given string.
// Examples:
// Input: s = “hello everyone”
// Output: s = “everyone hello”
// Input: s = “i love programming very much”
// Output: s = “much very programming love i”

// function str(a){
//     let str=""
// let s=a.split(" ");
// for(i=s.length-1;i>=0;i--){
//     str=str+s[i]
//     if(i!==0){
//       str=str+" "
//     }
// }
// console.log(str)

// }
// str("hello everyone")


function str(a) {
    let str = "";
    let s = a.split(" ")
    for (i = s.length - 1; i >= 0; i--) {
        str = str + s[i]
        if (i!== 0) {
            str = str + " "
        }

    }
    console.log(str)
}
str("i love programming very much")


