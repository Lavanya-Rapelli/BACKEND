const mongoose = require("mongoose");

class Vehicle {
  constructor(type, regNumber, color) {
    this.type = type;
    this.regNumber = regNumber;
    this.color = color;
  }

  static getSchema() {
    return new mongoose.Schema({
      type: { type: String, required: true },
      regNumber: { type: String, required: true, unique: true },
      color: { type: String, required: true },
    });
  }
}

const VehicleModel = mongoose.model("Vehicle", Vehicle.getSchema());
module.exports = { Vehicle, VehicleModel };
