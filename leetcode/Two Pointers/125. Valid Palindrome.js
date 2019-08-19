// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
//
// Note: For the purpose of this problem, we define empty string as valid palindrome.
//
// Input: "A man, a plan, a canal: Panama"
// Output: true


// filter out invalid character
var isPalindrome1 = function(s) {
    if (s === "") {
        return true;
    }

    const filtered =s
        .toLowerCase()
        .split("")
        .filter((ch) => valid(ch))
        .join("");

    return filtered.split("").reverse().join("") === filtered;
};


var isPalindrome2 = function(s) {
    if (s === "") {
        return true;
    }
    const convertedStr = s.toLowerCase();

    let i = 0;
    let j = convertedStr.length - 1;

    while (i < j) {
        if (!valid(convertedStr[i])) {
            i ++;
            continue;
        }
        if (!valid(convertedStr[j])) {
            j --;
            continue;
        }
        if (convertedStr[i] !== convertedStr[j]) {
            return false;
        } else {
            i ++;
            j --;
        }
    }
    return true;
};

const valid = (ch) => {
    return (ch >= "a" && ch <= "z") || (ch >= "0" && ch <= "9");
};


console.log(isPalindrome3("race a car"));