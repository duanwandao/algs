var obj = {
    age: 20,
    say: () => {
        console.log(this.age);
    }
}

var obj2 = {
    age: 20,
    say: function() {
        console.log(this.age);
    }
}

obj.say();  // undefined, object不产生scope, 箭头函数里的this就指向了window
obj2.say(); // 20， obj2调用了say，所以this指向了obj2

