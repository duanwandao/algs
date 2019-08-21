var o = {
    name: "andy"
};

function fn(a, b) {
    console.log(this);
    console.log(a + b);
};

// 不会调用原来的函数，可以改变原来函数内部的this指向
// 返回的是原来函数改变this之后产生的新函数
var f = fn.bind(o, 1, 2);
f();

// 如果有的函数我们不需要立即调用，但是又想改变这个函数内部的this指向
// 例如， 我们有个按钮，当点击后，就禁用这个按钮， 3s后开启

var btn = document.querySelector("button");
btn.onclick = function () {
    this.disabled = true;   // this指向btn

    setTimeout(function () {
        this.disabled = false;  //bind后this指向btn， 不bind指向window
    }.bind(this), 2000) //bind放在callback后面，this指向btn
}

// 有多个按钮
var btns = document.querySelectorAll("button");
for (var i = 0; i < btns.length; i ++) {
    btns[i].onclick = function () {
        this.disabled = true;

        setTimeout(function () {
            this.disabled = false;
        }.bind(this), 2000);
    }
}