const Vehicle = require("./Vehicle");

class Truck extends Vehicle {
    constructor(regNumber, color) {
        super("Truck", regNumber, color);
    }
}

module.exports = Truck;
