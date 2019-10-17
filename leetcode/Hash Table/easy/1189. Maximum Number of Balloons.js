// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
//
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
//
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
//
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
//
// Input: text = "leetcode"
// Output: 0

var maxNumberOfBalloons = function(text) {
    const map = text.split("").reduce((map, letter) => {
        map[letter] = (map[letter] || 0) + 1;
        return map;
    }, { b: 0, a: 0, l: 0, o: 0, n: 0 });


    return Math.min(map["b"], map["a"], Math.floor(map["l"] / 2), Math.floor(map["o"] / 2), map["n"]);
};
