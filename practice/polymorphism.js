// Polymorphism means the same method can behave differently based on the class that implements it.



class Animal {
    makeSound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Dog barks!");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Cat meows!");
    }
}

const animals = [new Dog(), new Cat(), new Animal()];
animals.forEach(animal => animal.makeSound()); 
