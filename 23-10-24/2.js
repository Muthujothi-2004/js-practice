function prime(a) {

    for (i = 0; i <= a.length - 1; i++) {
        n = primeFunction(a[i]);
        if (n) {
            console.log(a[i])
        }
        else {
            console.log("Not prime")
        }

    }


}
function primeFunction(b) {
    let isprime = true;
    if (b <= 1) {
        isprime = false;
       
    }

    else {
        for (j = 2; j <= Math.sqrt(b); j++) {
            if (b % j === 0) {
                isprime = false;
               
            }
        }

    }

    if (isprime) {
        return true;
    }

    else {
        return false
    }

}
prime([1, 2, 3, 5, 7,8, 11, 19,100])