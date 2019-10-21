// Suppose Andy and Doris want to choose a restaurant for dinner,
// and they both have a list of favorite restaurants represented by strings.
//
//     You need to help them find out their common interest with the least list index sum.
//     If there is a choice tie between answers, output all of them with no order requirement.
//     You could assume there always exists an answer.
//
// Example 1:
// Input:
//     ["Shogun", "Tapioca Express", "Burger King", "KFC"]
//     ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
// Output: ["Shogun"]
// Explanation: The only restaurant they both like is "Shogun".
//
//
// Example 2:
// Input:
//     ["Shogun", "Tapioca Express", "Burger King", "KFC"]
//     ["KFC", "Shogun", "Burger King"]
// Output: ["Shogun"]
// Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).


var findRestaurant = function(list1, list2) {
    const set = new Set(list1);

    let min = Number.MAX_SAFE_INTEGER;
    const map = {};

    list2.forEach((restaurant, index) => {
        if (set.has(restaurant)) {
            const indexSum = list1.indexOf(restaurant) + index;
            map[restaurant] = indexSum;
            min = indexSum > min ? min : indexSum;
        }
    });
    return Object.keys(map).filter(restaurant => map[restaurant] === min);
};

const list1 = ["cbe","dcb","bbd","ddb","KFC"];
const list2 = ["cbc","bad","bcb","bbd","eda","edc","ddb","KFC"];
console.log(findRestaurant(list1, list2));