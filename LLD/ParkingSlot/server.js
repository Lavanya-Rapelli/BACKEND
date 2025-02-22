require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const parkingRoutes = require("./routes/parkingRoutes");
dotenv.config();

const app = express();
connectDB()

app.use(cors());
app.use(bodyParser.json());
app.use("/api/parking", parkingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`)
);
