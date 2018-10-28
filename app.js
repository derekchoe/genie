const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require("path");

const users = require('./routes/api/users');
const transactions = require('./routes/api/transaction');
const categories = require('./routes/api/categories');

const app = express();
const db = require('./config/key').mongoURI;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);
app.use('/api/users', users);
app.use('/api/transactions', transactions);
app.use('/api/categories', categories);


// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
