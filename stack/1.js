class stack{
    constructor(){
        this.empty=[];
    }

    push(input){
        this.empty.push(input)
    }

    peek(){
        return this.empty[this.empty.length-1]
    }
    pop(){
        this.empty.pop()
    }
  

}

 let mystack=new stack()
 mystack.push(60)
 mystack.push(20)
 mystack.pop()

 console.log(mystack.peek())



