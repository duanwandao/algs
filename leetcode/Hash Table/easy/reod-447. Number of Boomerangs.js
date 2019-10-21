// Given n points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points (i, j, k)
// such that the distance between i and j equals the distance between i and k (the order of the tuple matters).
//
// Find the number of boomerangs.
// You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).
//
// Example:
//
// Input:
//     [[0,0],[1,0],[2,0]]
//
// Output:
//     2
//
// Explanation:
//     The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]


//
// point a fixed,
// if (the distance between point a and point c == the distance between point a and point b == the distance between point a and point d)
// there are 6 combos: abc, acb, abd, adb, acd, adc. -------N=3*(3-1)=6

var numberOfBoomerangs = function(points) {
    let res = 0;

    for (let i = 0; i < points.length; i++) {
        const map = {};

        for (let j = 0; j < points.length; j++) {
            if (i === j) continue;
            const dist = getDistance(points[i], points[j]);

            map[dist] ? map[dist] += 1 : map[dist] = 1;
        }
        Object.values(map).forEach(count => res += count * (count - 1))
    }

    return res;
};
const getDistance = (p1, p2) => {
    return Math.pow(p1[0] - p2[0], 2) + Math.pow((p1[1] -p2[1]), 2);
};

const points = [[0,0],[1,0],[2,0]];
console.log(numberOfBoomerangs(points));
