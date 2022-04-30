const express = require('express')
//const connectDB = require('./DB/connection')
const app = express()
const port = process.env.PORT || 3000

const dotenv = require('dotenv');
dotenv.config()
 

app.use('/', require('./routes'))

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})

