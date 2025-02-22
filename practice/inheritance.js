// Inheritance allows a class (child) to inherit properties and methods from another class (parent).

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Calls the parent class constructor
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} is barking!`);
    }
}

const dog1 = new Dog("Buddy", "Labrador");
dog1.makeSound(); 
dog1.bark(); 


