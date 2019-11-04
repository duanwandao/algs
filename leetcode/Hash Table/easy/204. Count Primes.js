var countPrimes = function(n) {
    let count = 0;

    for (let i = 0; i < n; i ++) {
        if (isPrime(i)) {
            count ++;
        }
    }
    return count;
};

const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i ++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
};
