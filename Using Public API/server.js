// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const weatherRoutes = require("./routes/weather"); // Correct path to weather.js

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Use weather routes
app.use("/", weatherRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
