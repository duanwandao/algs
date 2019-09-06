var value = { name: "Logan", age: 21, location: "London", xx: { aa: 1, vv:2 }, yy: [{a: {x:1}}, {b:2}] };

const stringify = (obj) => {
  const res = [];

  Object.keys(obj).forEach((key) => {
    const val = obj[key];
    if (typeof val !== undefined && typeof val !== "function") {
      const pair =  getQuotedString(key) + ":" + getString(val);
      res.push(pair);
    }
  });
  return `{${res.join(",")}}`;
}

const getString  = (val) => {
    switch (typeof val) {
        case "string":
            return getQuotedString(val);
            break;

        case "number":
        case "boolean":
            return val;
            break;

        case "object":
            if (val === null) {
                return "null";
            }

            if (Array.isArray(val)) {
                let arrString = []
                for (let i = 0; i < val.length; i++) {
                    arrString.push(getString(val[i]));
                }
                return `[${arrString.join(",")}]`;
            }

            return stringify(val);
            break;
    }
}

const getQuotedString = (str) => `"${str}"`;

console.log(stringify(value));