// Dependencies 
const express = require("express");
const cors = require("cors");
const animesController = require("./controllers/animesController");


// Configuration
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/animes", animesController)

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to our AnimeReview");
});

app.get("*", (req, res) => {
    res.status(404).send("These are not the Animes you are looking for");
});

module.exports = app;