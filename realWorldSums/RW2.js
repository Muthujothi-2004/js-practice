function correct(password){
     isupper=false,
     islower=false,
     isnumber=false,
     isspcial=false,
     spcialChar="!@#$%^&*()_+{}[]|;:',.<>?/`~";

     if(password.length<8){
        return "Weak password : must be above 8 character long";
     }

     for(i=0;i<password.length;i++){
        let char=password[i]

        if(char>="A" &&char<="Z"){
            isupper=true
        }

        else if(char>="a" && char >= "z"){
            islower=true
        }

        else if(char>= "0" && char <= "9"){
            isnumber=true
        }

        else if(spcialChar.includes(char)){
       isspcial=true;
        }

     }

     if(isupper && islower && isnumber && isspcial){
        return "Strong password"
     }

     else{
        return "Weak password: must includies uppercase, lowercase, numbers and special characters"
     }

}
console.log(correct("Hello@12"))