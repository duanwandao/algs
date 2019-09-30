var countCharacters = function(words, chars) {
    const res = words.filter(word => {

        for(let i = 0; i < word.length; i ++) {
            const letter = word[i];
            const cm = chars.match(new RegExp(letter, "g"));
            const wm = word.match(new RegExp(letter, "g"));

            if(!cm || cm.length < wm.length) {
                return false;
            }
        }

        return true;
    });

    return res.join("").length;
};

const words = ["cat","bt","hat","tree"];
const chars = "atach";

console.log(countCharacters(words, chars));
console.log(chars.match(new RegExp("a", "g")));
console.log("cat".match(new RegExp("a", "g")));
