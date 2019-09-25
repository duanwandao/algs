const test = (n) => {
    for (let i = 1; i <=n ; i ++) {
        if (i % 30 === 0) {
            console.log("CodilityTestCoders");
        } else if (i % 15 === 0)  {
            console.log("TestCoders");
        } else if (i % 10 === 0) {
            console.log("CodilityCoders");
        } else if (i % 6 === 0) {
            console.log("CodilityTest");
        } else if (i % 5 === 0) {
            console.log("Coders");
        } else if (i % 3 === 0) {
            console.log("Test")
        } else if (i % 2 === 0) {
            console.log("Codiliy");
        } else {
            console.log(i);
        }
    }
};
