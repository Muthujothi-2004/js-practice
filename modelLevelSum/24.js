// Given a string count number of distinct vowels in the String. Consider all the inputs to be in
// lowercase
// Input: cool
// Output: 1
// Explanation: Since o is coming twice, 
// but we need distinct counts so its only 1 Generate Javascript code which 
// will print the result in console.log and generate 5 test cases

function number(str){
  let vowels= (['a', 'e', 'i', 'o', 'u'])
  let foundvowels= new set();
  for(i=0;i<str.length;i++){
    const char=str[i];
    if(vowels===char){
        foundvowels=char
    }
  }
  console.log(foundvowels)
}
number("hello")