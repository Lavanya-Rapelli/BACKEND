const Vehicle = require("./Vehicle");

class Bike extends Vehicle {
    constructor(regNumber, color) {
        super("Bike", regNumber, color);
    }
}

module.exports = Bike;
