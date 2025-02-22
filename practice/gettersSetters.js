// Getters and Setters allow controlled access to private properties.


class Person {
    constructor(name, age) {
        this.name = name;
        this._age = age; // Using _ to indicate it's private
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.log("Invalid age");
        }
    }
}

const person1 = new Person("John", 25);
console.log(person1.age);
person1.age = 30; 
console.log(person1.age);
person1.age = -5; 
