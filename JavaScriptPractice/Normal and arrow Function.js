// function sum(a,b){
//     return a+b
// }
// let sum2=(a,b)=>a+b

class person{
    constructor (nam,age){
        this.nam=nam
        this.age =age
    }

    printArrowFunction(){
        setTimeout(() =>{
            console.log("Arrow" +nam)
        },100)
    }

    printFunction (){
        setTimeout(function (){
          console.log("Function" + nam)  
        } ,100)
    }
}

const person=new person("hari")
person.printArrowFunction()
person.printFunction()