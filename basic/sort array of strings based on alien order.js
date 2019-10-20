
const sortArrayOfStringsBasedOnAlienOrder = (words, order) => {
    return words.sort((a, b) => {
        for (let i = 0; i < a.length; i ++) {
            if (order.indexOf(a[i]) > order.indexOf(b[i])) return 1;
            if (order.indexOf(a[i]) < order.indexOf(b[i])) return -1;
        }
    })
};

const words = ["hello", "leetcode"];
const order = "hlabcdefgijkmnopqrstuvwxyz";
console.log(sortArrayOfStringsBasedOnAlienOrder(words, order));

