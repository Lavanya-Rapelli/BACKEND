const { TicketModel } = require("../models/Ticket");
const { VehicleModel } = require("../models/Vehicle");

class ParkingController {
  static async getAvailableSlots(req, res) {
    const slots = await SlotModel.find({ isBooked: false });
    res.json(slots);
  }

  static async parkVehicle(req, res) {
    const { regNumber, color, type } = req.body;

    const vehicle = new VehicleModel({ type, regNumber, color });
    await vehicle.save();

    const ticket = new TicketModel({ vehicle: vehicle._id, floorNumber: 1, slotNumber: 1 });
    await ticket.save();

    res.json({ message: "Vehicle Parked", ticket });
  }

  static async exitVehicle(req, res) {
    const { ticketId } = req.body;

    const ticket = await TicketModel.findById(ticketId);
    ticket.exitedAt = new Date();
    
    const duration = Math.ceil((ticket.exitedAt - ticket.issuedAt) / (1000 * 60 * 60));
    ticket.amountPaid = duration * 5;

    await ticket.save();
    res.json({ message: "Vehicle Exited", amountPaid: ticket.amountPaid });
  }
}

module.exports = ParkingController;
