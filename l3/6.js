function prime(a, b) {
    var str = [];

    for (i = a; i <= b; i++) {
        if (i <= 1) {
            isprime = false;
        }

        else {
            let isprime = true;
            for (j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0) {
                    isprime = false;
                }
            }
            if (isprime) {
                str.push(i);
            }
        }

    }
    if (str.length === 0) {
        console.log("No prime this range")
    }
    else {
        console.log(str.join(","))
    }
}
prime(1,10)