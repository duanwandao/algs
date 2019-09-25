let cache = {};

function memoizedAddTo80(n) {
    if (n in cache) {
        return cache[n];
    } else {
        console.log("long time");
        cache[n] = n + 80;
        return cache[n];
    }
};
