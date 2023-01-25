require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require('cors');
const morgan = require('morgan')
// const db = require('./db.js')

// const controller = require('./controllers')

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json())
app.use(cors());
app.use(morgan('dev'));


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
