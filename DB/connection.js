const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()


const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.b8eds.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectDB = async () =>{
 await mongoose.connect(URI);
 console.log('db connected')
}

module.exports = connectDB;