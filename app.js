const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: false }));

const PORT = process.env.PORT || 5000;
// const url = process.env.SHOPPING_MONGO_DB;
const url = 'mongodb+srv://afassignment:afAssignment123@assignmentcluster.nk6a6.mongodb.net/ShoppingApp_Delivery?retryWrites=true&w=majority';

try {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected");
} catch (error) {
  console.log(error.message);

  //Exit Process with failure
  process.exit(1);
}
app.get("/", (req, res) => res.send("Delivery Service API Running..."));

const deliverDetails = require("./Routes/deliverRoutes");
app.use("/deliverDetails", deliverDetails);

const locationDetails = require("./Routes/locationRoute");
app.use("/locationDetails", locationDetails);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

