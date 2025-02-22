const express = require("express");
const ParkingController = require("../controllers/ParkingController");

const router = express.Router();

router.get("/available-slots", ParkingController.getAvailableSlots);
router.post("/park", ParkingController.parkVehicle);
router.post("/exit", ParkingController.exitVehicle);

module.exports = router;
