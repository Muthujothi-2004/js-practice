// let ar=[]

// function palindrome(a){

//     b=a.split("").reverse().join("")
//     if(a==b){
//         ar.push(a)
//     }
// }

// function checkPalindrome(b){
   
//     for(let i=0;i<b.length;i++){
        
//         for(let j=i+1;j<=b.length;j++){
//             c=b.substring(i,j)
            
//             palindrome(c)
            
//         }
//     }

// }
// checkPalindrome("famdmafs")

// let len=0;
// let box
// for(let i=0;i<ar.length;i++){
//     if(len<ar[i].length){
//         box=ar[i]
//         len=ar[i].length
//     }
// }
// console.log(box)





function palindrome(a){
    b=a.split("").reverse().join("")
    if(b==a){
        console.log("yes")
    }
}
palindrome("madam")






