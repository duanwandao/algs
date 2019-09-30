// Now, call a "count-paired domain" to be a count
// (representing the number of visits this domain received), followed by a space,
// followed by the address. An example of a count-paired domain might be "9001 discuss.leetcode.com".
//
//     We are given a list cpdomains of count-paired domains. We would like a list of count-paired domains,
//     (in the same format as the input, and in any order), that explicitly counts the number of visits to each subdomain.
//
//     Example 1:
// Input:
//     ["9001 discuss.leetcode.com"]
// Output:
//     ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
// Explanation:
//     We only have one website domain: "discuss.leetcode.com". As discussed above, the subdomain "leetcode.com" and "com" will also be visited. So they will all be visited 9001 times.
//
//     Example 2:
// Input:
//     ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
// Output:
//     ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
// Explanation:
//     We will visit "google.mail.com" 900 times, "yahoo.com" 50 times, "intel.mail.com" once and "wiki.org" 5 times.
//     For the subdomains, we will visit "mail.com" 900 + 1 = 901 times, "com" 900 + 50 + 1 = 951 times, and "org" 5 times.

var subdomainVisits = function(cpdomains) {
    const map = {};

    for (const cpdomain of cpdomains) {
        let [count, domain] = cpdomain.split(" ");
        count = Number(count);

        const subs = getSubdomains(domain);

        subs.forEach(sub => {
            map[sub] = map[sub] ? map[sub] + count : count;
        })
    }

    return Object.entries(map).map(([domain, count]) => `${count} ${domain}`);
};

const getSubdomains = (domain) => {
    const res = [domain];

    for (let i = domain.length - 1; i >= 0; i --) {
        if (domain[i] === ".") {
            res.push(domain.substring(i + 1));
        }
    }
    return res;
};

console.log(subdomainVisits(input));