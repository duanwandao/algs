var o = {
    name: "andy"
};

function fn(city, state) {
    console.log(this);  //{ name: 'andy' }
    console.log(city);  //sunnyvale
    console.log(state); //CA
};

// apply 调用函数，改变内部this的指向
fn.apply(o, ["sunnyvale", "CA"]);

// apply的主要应用， 比如可以利用apply借助于数学内置对象求最大和最小值
var arr = [1, 3, 52, 99, 2];
var max = Math.max.apply(Math, arr); // 99
var min = Math.min.apply(Math, arr); // 1
