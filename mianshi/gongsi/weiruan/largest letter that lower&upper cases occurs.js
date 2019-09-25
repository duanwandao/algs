// Given a string, if it has some letters that occur both lower case and upper case, return the largest one.

// AaBbcDDeFG => b
// AaBBcDD => a
// AABBcDD = "No"

const getLetter = (str) => {
    const set1 = new Set();
    const set2 = new Set();
    let max = "No";

    for (let i = 0; i < str.length; i ++) {
        if ("a" <= str[i] && str[i] <= "z") {
            set1.add(str[i]);
        }
        if ("A" <= str[i] && str[i] <= "Z") {
            set2.add(str[i]);
        }
    }
    set1.forEach((elem) => {
        if (set2.has(elem.toUpperCase())) {
            max = elem > max ? elem : max;
        }
    });

    return max;
};


//console.log(String.fromCharCode("a".charCodeAt(0) - 32));
console.log(getLetter("AaBbcDDeFFfgg"));

