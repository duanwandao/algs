function Animal(name) {
    this.name = name;
}
Animal.prototype.makeSound = function () {
    console.log("animal sound");
}
Animal.prototype.eat = function () {
    console.log("anmial eat");
}

function Dog(name, weight) {
    // this 指向构造函数的对象实例-myDog
    Animal.call(this, name);
    this.weight = weight;
}

Dog.prototype = new Animal();
//如果利用对象的形式修改了原型对象， 别忘了利用constructor指回原来的构造函数
Dog.prototype.constructor = Dog;

// 这个是子构造函数专门的方法
Dog.prototype.bark = function () {
    console.log("bark, bark");
}
Dog.prototype.makeSound = function () {
    console.log("dog makes sound");
}

var myDog = new Dog("Jack", "50");
myDog.bark();
myDog.makeSound();
myDog.eat();
