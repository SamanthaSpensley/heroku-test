"use strict"; //to allow heroku to use ES6

require('dotenv').config();
const express = require('express')
const port = process.env.PORT

const app = express();

app.get('/', (req, res, next) => {
  res.json({message: "I am working on new features!"})
})

console.log(process.env);

app.listen(port, function(){
  console.log("Running server on port", port);
})
