// Given an array A of strings made only from lowercase letters,
// return a list of all characters that show up in all strings within the list (including duplicates).
// For example, if a character occurs 3 times in all strings but not 4 times,
// you need to include that character three times in the final answer.
//
// You may return the answer in any order.
//
// Example 1:
//
// Input: ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:
//
// Input: ["cool","lock","cook"]
// Output: ["c","o"]

var commonChars = function(A) {
    return A.sort((a, b) => a.length - b.length)
        .shift()
        .split("")
        .reduce((res, letter) => {
            let hasLetter = true;

            for(let i = 0; i < A.length; i ++) {
                if (A[i].indexOf(letter) > -1) {
                    A[i] = A[i].replace(letter, "");
                } else {
                    hasLetter = false;
                }
            }
            if (hasLetter) {
                res.push(letter);
            }
            return res;
        }, []);
};




console.log(commonChars(["bella","label","roller"]));
