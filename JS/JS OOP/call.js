var o = {
    name: "andy"
};

function fn(a, b) {
    console.log(this);      //{name: "andy"}
    console.log(a + b);     // 3
};

//1. call可以调用函数，改变内部this的指向
fn.call(o, 1, 2);

//2. call的主要作用是实现继承
function Father(name, age) {
    this.name = name;
    this.age = age;
}

function Son(name, age) {
    Father.call(this, name, age)
}

var son = new Son("Jack", 16);
console.log(son);   //Son { name: 'Jack', age: 16 }