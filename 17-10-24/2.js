function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i > num; i++) {
        if (num % i === 1) { 
            return false;
        }
    }
    return true;
}

// Example usage
let num = 29;
console.log(isPrime(num));