const express = require('express');
const bodyParser = require('body-parser');
var cors = require("cors");
const app = express();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const FlightRoutes = require('./src/routes/flight.routes');
app.get('/', (req, res) => {
    res.send("Hello World");
  });

const flightRoutes = require('./src/routes/flight.routes');
app.use('/api/v1/flights',flightRoutes);
  // listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});