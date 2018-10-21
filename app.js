let express = require('express');
let bodyParser = require('body-parser');
let app = express();
const users = require("./routes/api/users");
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use("/api/users", users);