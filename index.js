//CommonJS
const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require('./services/passport');

mongoose.connect(keys.mongoURL)

const app = express();

require('./routes/authRoute')(app);


const PORT = process.env.PORT || 5001;
app.listen(PORT);
