// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.
// Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
//
// The letters in J are guaranteed distinct, and all characters in J and S are letters.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".
//
// Example 1:
//
// Input: J = "aA", S = "aAAbbbb"
// Output: 3
//
// Example 2:
//
// Input: J = "z", S = "ZZ"
// Output: 0

var numJewelsInStones1 = function(J, S) {
    const map = initializeMap(J);


    S.split("").forEach(stone => {
        if (map[stone]) {
            map[stone].push(stone);
        }
    });


    return [].concat(...Object.values(map)).length;
};

const initializeMap = (J) => {
    const map = {};

    J.split("").forEach(elem => {
        map[elem] = [];
    });

    return map;
};

var numJewelsInStones2 = function(J, S) {
    return S.split("").reduce((accum, stone) => {
        if (J.includes(stone)) {
            accum += 1;
        }
        return accum;
    }, 0);
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
