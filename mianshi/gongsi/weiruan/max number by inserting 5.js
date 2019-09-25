// given a number, insert 5, return the largest number.
// examples, 123 => 5123   0 => 50   -999 => -5999.

const insertFive = (N) => {
    let inserted;

    if (N >=0) {
        const numStr = N.toString();
        const len = numStr.length;
        let max = -8000000;
        for (let i = 0; i <= len; i ++) {
            inserted = numStr.substring(0, i) + "5" + numStr.substring(i, len);
            max = Math.max(max, inserted);
        }
        return Number(max);
    } else {
        N = Math.abs(N);
        const numStr = N.toString();
        const len = numStr.length;
        let min = 99999999;

        for (let i = 0; i <= len; i ++) {
            inserted = numStr.substring(0, i) + "5" + numStr.substring(i, len);
            min = Math.min(min, inserted);
        }
        return Number("-" + min);
    }
};