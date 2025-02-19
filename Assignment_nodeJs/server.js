const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require('cors');
const errorHandler = require("./middleware/errorHandler");

dotenv.config();

const app = express();

app.use(cors());

// Connect to MongoDB
connectDB();

app.use(express.json());
// Middleware for parsing JSON
app.use(express.json());
app.use((req, res, next) => {
    console.log(`Incoming ${req.method} request to ${req.url}`);
    next(); 
});

app.use("/api/auth", require("./routes/authRoutes"));


// Error handling middleware
app.use(errorHandler);

// Define server port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


