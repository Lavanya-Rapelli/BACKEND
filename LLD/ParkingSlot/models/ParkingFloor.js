const mongoose = require("mongoose");

class ParkingFloor {
  constructor(floorNumber) {
    this.floorNumber = floorNumber;
    this.slots = [];
  }

  static getSchema() {
    return new mongoose.Schema({
      floorNumber: { type: Number, required: true },
      slots: [{ type: mongoose.Schema.Types.ObjectId, ref: "Slot" }],
    });
  }
}

const ParkingFloorModel = mongoose.model("ParkingFloor", ParkingFloor.getSchema());
module.exports = { ParkingFloor, ParkingFloorModel };
