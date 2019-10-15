// Given words first and second, consider occurrences in some text of the form "first second third",
// where second comes immediately after first, and third comes immediately after second.
//
// For each such occurrence, add "third" to the answer, and return the answer.

// Example 1:
// Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
// Output: ["girl","student"]
//
// Example 2:
// Input: text = "we will we will rock you", first = "we", second = "will"
// Output: ["we","rock"]

var findOcurrences = function(text, first, second) {
    const words = text.split(" ");
    const res = [];

    for (let i = 0; i < words.length - 2; i ++) {   // length - 2 !!
        if (words[i] === first && words[i + 1] === second) {
            res.push(words[i + 2]);
        }
    }
    return res;
};
