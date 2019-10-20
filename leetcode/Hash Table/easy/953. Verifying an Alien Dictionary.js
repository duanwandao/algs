// In an alien language, surprisingly they also use english lowercase letters,
// but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.
//
//     Given a sequence of words written in the alien language, and the order of the alphabet,
//     return true if and only if the given words are sorted lexicographicaly in this alien language.
//
//
//
//     Example 1:
//
// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.


var isAlienSorted = function(words, order) {
    return words
        .slice()
        .sort((a, b) => {
            for (let i = 0; i < a.length; i++) {
                if (order.indexOf(a[i]) > order.indexOf(b[i])) return 1;
                if (order.indexOf(a[i]) < order.indexOf(b[i])) return -1;
            }
        }).join("") === words.join("")
};

const words = ["hello","leetcode"];
const order = "hlabcdefgijkmnopqrstuvwxyz";
console.log(isAlienSorted(words, order));