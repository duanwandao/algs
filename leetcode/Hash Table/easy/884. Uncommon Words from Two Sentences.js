// We are given two sentences A and B.  (A sentence is a string of space separated words.
// Each word consists only of lowercase letters.)
//
// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
//
//     Return a list of all uncommon words.
//
//     You may return the list in any order.
//
// Example 1:
//
// Input: A = "this apple is sweet", B = "this apple is sour"
// Output: ["sweet","sour"]

// Example 2:
//
// Input: A = "apple apple", B = "banana"
// Output: ["banana"]

var uncommonFromSentences = function(A, B) {
    const map = [...A.split(" "), ...B.split(" ")].reduce((map, word) =>{
        map[word] = (map[word] || 0) + 1;
        return map;
    }, {});

   return Object.keys(map).filter(key => map[key] === 1);
};

const A = "this apple is sweet";
const B = "this apple is sour";
console.log(uncommonFromSentences(A, B));