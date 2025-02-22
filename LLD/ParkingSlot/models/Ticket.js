const mongoose = require("mongoose");

class Ticket {
  constructor(floorNumber, slotNumber, vehicle) {
    this.floorNumber = floorNumber;
    this.slotNumber = slotNumber;
    this.vehicle = vehicle;
    this.issuedAt = new Date();
    this.exitedAt = null;
    this.amountPaid = 0;
  }

  static getSchema() {
    return new mongoose.Schema({
      floorNumber: { type: Number, required: true },
      slotNumber: { type: Number, required: true },
      vehicle: { type: mongoose.Schema.Types.ObjectId, ref: "Vehicle" },
      issuedAt: { type: Date, default: Date.now },
      exitedAt: { type: Date },
      amountPaid: { type: Number, default: 0 },
    });
  }
}

const TicketModel = mongoose.model("Ticket", Ticket.getSchema());
module.exports = { Ticket, TicketModel };
