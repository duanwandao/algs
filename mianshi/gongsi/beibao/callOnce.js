var once1 = function (func) {
    var result;

    return function () {
        if (func) {
            result = func.apply(this, arguments);
            func = null;
        }

        return result;
    }
};

const once2 = fn => () => {
    if (!fn) return;
    fn();
    fn = null;
};

function test () {
    console.log("aaa");
}

var x = once1(test);
x();
x();

var y = once2(test);
y();
y();
