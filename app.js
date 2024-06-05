require("dotenv").config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require("./routes")
const errorHandler = require("./middlewares/errorHandler.js")

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(router);
app.use(errorHandler);

module.exports = app