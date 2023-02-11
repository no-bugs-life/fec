require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require('cors');
const morgan = require('morgan')
const router = require('./routes.js');
const compression = require('compression');

const app = express();

app.use(compression());

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json())
// app.use(express.urlencoded())
app.use(cors());
app.use(morgan('dev'));

// Router
app.use('/api', router)

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
