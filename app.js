const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();


const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

const Mongo_url = process.env.SHOPPING_MONGO_DB;

mongoose.connect(Mongo_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongo DB connected..!!");
});

// const deliverDetails = require("./Routes/deliverRoute");
// app.use("/deliverDetails", deliverDetails);

// const locationDetails = require("./Routes/locationRoute");
// app.use("/locationDetails", locationDetails);

app.listen(port, () => {
  console.log("Connected to port");
});
