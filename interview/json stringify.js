var value = { name: "Logan", age: 21, location: "London", xx: { aa: 1, vv:2 }, yy: ["a", "b"] };
var result = JSON.stringify(value);
console.log(result);

const stringify = (obj) => {
  const res = [];

  Object.keys(obj).forEach((key) => {
    const val = obj[key];
    if (typeof val !== undefined && typeof )
  })
}
