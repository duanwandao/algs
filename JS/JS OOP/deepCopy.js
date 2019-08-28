const o = {
    name: "jack",
    age: 18,
    color: ["red", "blue"],
    car: {
        model: "benz",
        price: 40000,
        parameters: {
            width: 2,
            height: 3
        }
    }
}

const deepCopy = (o) => {
    const res = {};

    for (let key in o) {
        let item = o[key];

        if (item && typeof item === "object") {
            res[key] = deepCopy(item)
        } else {
            res[key] = item;
        }
    }
    return res;
}

const copy = deepCopy(o);
console.log(copy);

o.car.parameters.height = 5;
console.log(o);
console.log(copy);