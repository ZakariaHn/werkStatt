const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

// Use middleware________________________________________

app.use(express.json());
app.use(cors());
dotenv.config();

// Import Routes_________________________________________

const carsRoute = require("./routes/cars");
const clientsRoute = require("./routes/clients");
const operationsRoute = require("./routes/operations");
const searchClientRoute = require("./routes/search");
const searchCarRoute = require("./routes/search");

// Connect to DB_________________________________________

const envconfig = require("./config/config");
mongoose
  .connect(process.env.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to DB !"))
  .catch((err) => console.log(err));

// Set Routes____________________________________________

app.use("/api/clients", clientsRoute);
app.use("/api/cars", carsRoute);
app.use("/api/operations", operationsRoute);
app.use("/api/clientsearch", searchClientRoute);
app.use("/api/carsearch", searchCarRoute);

//App port_______________________________________________

const port = envconfig.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}`));
