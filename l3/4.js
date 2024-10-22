// array prime

function prime(a) {
    let isprime = true;
    for (i = 1; i < a.length - 1; i++) {
        let b = a[i];
        if (b <= 1) {
            console.log(b)
        }

        for (j = 2; j <= Math.sqrt(a.length - 1); j++) {

            if (j % b === 0) {
                isprime = false;
            }

        }
        if (isprime) {
            console.log(b)
        }
        else {
            console.log(b)
        }
    }
}
prime(a = [20, 19, 100, 40])