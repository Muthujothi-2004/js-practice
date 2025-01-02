// Given an array check if its sum of all of its numbers is divisble by 11 or not

function array(n) {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum =sum+ n[i];  
    }
    
    if (sum % 11 === 0) {
        console.log("Number is divisible by 11");
    } else {
        console.log("No");
    }
}

array([7,7,90]);
