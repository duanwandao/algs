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

// 1.
const shallowCopy = (o) => {
    const res = {};

    for (var key in o) {
        res[key] = o[key];
    }
    return res;
};

const copy1 = shallowCopy(o);

// 2.
const copy2 = Object.assign({}, o);

//3.
const copy3 = {...o};

