class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("animal sound");
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log("bark, bark");
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log("meow, meow");
    }
}


const myDog = new Dog("Jack");
myDog.makeSound();

const myCat =  new Cat("Tom");
myCat.makeSound();




