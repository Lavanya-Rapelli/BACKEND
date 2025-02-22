const mongoose = require("mongoose");

class Slot {
  constructor(type, number) {
    this.type = type;
    this.number = number;
    this.isBooked = false;
  }

  static getSchema() {
    return new mongoose.Schema({
      type: { type: String, required: true },
      number: { type: Number, required: true },
      isBooked: { type: Boolean, default: false },
    });
  }
}

const SlotModel = mongoose.model("Slot", Slot.getSchema());
module.exports = { Slot, SlotModel };
