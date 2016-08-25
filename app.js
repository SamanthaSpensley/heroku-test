require('dotenv').config();
const express = require('express')
const port = process.env.PORT

const app = express();

app.get('/', (req, res, next) => {
  res.json({message: "I am working"})
})

console.log(process.env);

app.listen(port, function(){
  console.log("Running server on port", port);
})
