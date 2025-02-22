const mongoose = require("mongoose");

class ParkingLot {
  constructor(name) {
    this.name = name;
    this.floors = [];
  }

  static getSchema() {
    return new mongoose.Schema({
      name: { type: String, required: true },
      floors: [{ type: mongoose.Schema.Types.ObjectId, ref: "ParkingFloor" }],
    });
  }
}

const ParkingLotModel = mongoose.model("ParkingLot", ParkingLot.getSchema());
module.exports = { ParkingLot, ParkingLotModel };
