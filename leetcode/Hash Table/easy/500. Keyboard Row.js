// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.
//
// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]

var findWords = function(words) {
    const LETTER_TO_ROW = {
        q: 0, w: 0, e: 0, r: 0, t: 0, y: 0, u: 0, i: 0, o: 0, p: 0,
        a: 1, s: 1, d: 1, f: 1, g: 1, h: 1, j: 1, k: 1, l: 1,
        z: 2, x: 2, c: 2, v: 2, b: 2, n: 2, m: 2
    };

    return words.filter((word) => {
        let isSameRow = true;
        const letters = word.toLowerCase().split("");
        const row = LETTER_TO_ROW[letters[0]];

        for (letter of letters) {
            if (LETTER_TO_ROW[letter] !== row) {
                isSameRow = false;
                break;
            }
        }
        return isSameRow;
    });
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));