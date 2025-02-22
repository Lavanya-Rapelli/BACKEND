const Vehicle = require("./Vehicle");

class Car extends Vehicle {
    constructor(regNumber, color) {
        super("Car", regNumber, color);
    }
}

module.exports = Car;
