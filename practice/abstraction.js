// Abstraction hides the complex implementation and only exposes the necessary features.

class Car {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log(`${this.brand} is starting...`);
        this.#engineStart(); // Private method
    }

    #engineStart() {
        console.log("Engine started! (Internal process)");
    }
}

const myCar = new Car("Tesla");
myCar.start();

